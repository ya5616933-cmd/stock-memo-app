/**
 * 台股記憶閃卡 - 主程式
 */

// 全域變數
let srsManager;
let currentCard = null;
let isFlipped = false;

// DOM 元素
const elements = {
    flashcard: document.getElementById('flashcard'),
    stockCode: document.getElementById('stockCode'),
    stockNameFront: document.getElementById('stockNameFront'),
    stockName: document.getElementById('stockName'),
    stockIndustry: document.getElementById('stockIndustry'),
    stockDescription: document.getElementById('stockDescription'),
    stockMetric: document.getElementById('stockMetric'),

    btnArchive: document.getElementById('btnArchive'),
    btnForgot: document.getElementById('btnForgot'),
    btnKnow: document.getElementById('btnKnow'),

    masteredCount: document.getElementById('masteredCount'),
    learningCount: document.getElementById('learningCount'),
    archivedCount: document.getElementById('archivedCount'),
    remainingCount: document.getElementById('remainingCount'),

    progressBar: document.getElementById('progressBar')
};

// 初始化
async function init() {
    console.log('初始化閃卡系統...');

    // 建立 SRS Manager
    srsManager = new SRSManager();

    // 載入股票資料（支援新舊格式）
    try {
        let stocksData;

        // 優先使用新的產業分類格式
        if (window.STOCKS_DATA_BY_INDUSTRY) {
            console.log('使用產業分類格式載入資料');
            stocksData = window.getAllStocks();

            // 顯示產業統計
            const stats = window.getIndustryStats();
            console.log(`✓ 載入 ${stats.totalCompanies} 家公司`);
            console.log(`  分布於 ${stats.totalIndustries} 個產業`);

            // 顯示各產業公司數量（前 10 個）
            const topIndustries = Object.values(stats.byIndustry)
                .filter(i => i.companyCount > 0)
                .sort((a, b) => b.companyCount - a.companyCount)
                .slice(0, 10);

            console.log('  產業分布（Top 10）:');
            topIndustries.forEach(industry => {
                console.log(`    ${industry.industryName}: ${industry.companyCount} 家`);
            });

        } else if (window.STOCKS_DATA) {
            // 使用舊的扁平陣列格式
            console.log('使用扁平陣列格式載入資料');
            stocksData = window.STOCKS_DATA;
            console.log(`✓ 載入 ${stocksData.length} 家公司`);
        } else {
            throw new Error('找不到股票資料');
        }

        if (!stocksData || stocksData.length === 0) {
            throw new Error('股票資料為空');
        }

        // 加入到 SRS 系統
        srsManager.addCards(stocksData);
        srsManager.restoreProgress();

        // 更新統計
        updateStats();

        // 顯示第一張卡片
        showNextCard();

    } catch (error) {
        console.error('無法載入股票資料:', error);
        alert('資料載入失敗，請確認資料檔案已正確載入');
    }

    // === PRO架構整合: 顯示升級按鈕 ===
    if (window.contentAccessManager && window.contentAccessManager.getUserTier() === 'free') {
        const header = document.querySelector('.dashboard');
        if (header && !document.getElementById('btnUpgrade')) {
            const btnUpgrade = document.createElement('button');
            btnUpgrade.id = 'btnUpgrade';
            btnUpgrade.innerHTML = '✨ 升級完整版';
            btnUpgrade.style.cssText = `
                display: block;
                margin: 10px auto;
                background: linear-gradient(135deg, #fbbf24, #f59e0b);
                border: none;
                padding: 8px 16px;
                border-radius: 20px;
                color: #1e1b4b;
                font-weight: bold;
                cursor: pointer;
                animation: pulse 2s infinite;
            `;
            btnUpgrade.onclick = () => UIComponents.showUpgradeModal();

            const logo = header.querySelector('.logo');
            if (logo) {
                logo.insertAdjacentElement('afterend', btnUpgrade);
            }
        }
    }

    // 綁定事件
    setupEventListeners();
}

// 設定事件監聽
function setupEventListeners() {
    // 點擊卡片翻轉
    elements.flashcard.addEventListener('click', flipCard);

    // 按鈕事件
    elements.btnArchive.addEventListener('click', () => handleAnswer('archive'));
    elements.btnForgot.addEventListener('click', () => handleAnswer('forgot'));
    elements.btnKnow.addEventListener('click', () => handleAnswer('know'));
}

// 顯示下一張卡片
function showNextCard() {
    currentCard = srsManager.getNextCard();

    if (!currentCard) {
        showCompletionMessage();
        return;
    }

    // 重置翻轉狀態
    isFlipped = false;
    elements.flashcard.classList.remove('flipped');

    // 更新卡片內容
    const stock = currentCard.data;
    // === PRO架構整合: 檢查股票存取權限 ===
    const stockIndex = window.STOCKS_DATA.findIndex(s => s.id === stock.id);
    const accessManager = window.contentAccessManager;

    // 1. 檢查是否超過數量限制 (例如免費版僅限前 50 家)
    if (!accessManager.canAccessStock(stockIndex)) {
        console.log(`Stock ${stock.id} is locked by limit rule`);
        // 顯示限制提示，替代原本的卡片內容
        const limit = accessManager.getStockLimit();
        const prompt = UIComponents.createStockLimitPrompt(stockIndex, limit);

        // 清空並顯示提示
        const cardWrapper = document.getElementById('cardWrapper');
        cardWrapper.innerHTML = ''; // 清除舊卡片
        cardWrapper.appendChild(prompt);
        return;
    } else {
        // 確保卡片存在 (如果之前被提示取代了)
        const cardWrapper = document.getElementById('cardWrapper');
        if (!cardWrapper.contains(elements.flashcard)) {
            cardWrapper.innerHTML = '';
            cardWrapper.appendChild(elements.flashcard);
            // 重新綁定事件，因為元素可能被移除了
            elements.flashcard.addEventListener('click', flipCard);
        }
    }

    elements.stockCode.textContent = stock.id;
    elements.stockNameFront.textContent = stock.name;
    elements.stockName.textContent = stock.name;
    elements.stockIndustry.textContent = stock.industry;

    // === PRO架構整合: 內容模糊處理 ===
    // 處理描述欄位
    const descContent = stock.description || '(無描述)';
    const descResult = accessManager.processContent(
        descContent,
        'description', // 內容類型
        { blurred: true } // 若無權限則模糊
    );

    // 重置描述元素以清除舊的事件監聽器
    const newDescElement = elements.stockDescription.cloneNode(true);
    elements.stockDescription.parentNode.replaceChild(newDescElement, elements.stockDescription);
    elements.stockDescription = newDescElement; // 更新引用

    elements.stockDescription.textContent = descResult.content;

    // 應用模糊效果與互動
    UIComponents.applyBlur(elements.stockDescription, descResult.shouldBlur);
    if (descResult.shouldBlur) {
        UIComponents.makeUnlockable(elements.stockDescription, () => {
            UIComponents.showUpgradeModal();
        });
    }

    // 顯示量化指標 (如果有)
    if (stock.keyMetric) {
        const metricContent = stock.keyMetric;
        // 同樣可應用權限檢查...
        elements.stockMetric.textContent = metricContent;
        elements.stockMetric.style.display = 'block';
    } else {
        elements.stockMetric.style.display = 'none';
    }

    console.log(`顯示卡片: ${stock.id} ${stock.name}`);
}

// 翻轉卡片
function flipCard() {
    isFlipped = !isFlipped;
    elements.flashcard.classList.toggle('flipped');
}

// 處理回答
function handleAnswer(answer) {
    if (!currentCard) return;

    console.log(`回答: ${answer} for ${currentCard.id}`);

    // 記錄到 SRS 系統
    srsManager.recordAnswer(currentCard.id, answer);

    // 更新統計
    updateStats();

    // 顯示下一張卡片
    setTimeout(() => {
        showNextCard();
    }, 300);
}

// 更新統計資料
function updateStats() {
    const stats = srsManager.getStats();

    elements.masteredCount.textContent = stats.mastered;
    elements.learningCount.textContent = stats.learning;
    elements.archivedCount.textContent = stats.archived;
    elements.remainingCount.textContent = stats.remaining;

    // 更新進度條
    elements.progressBar.style.width = stats.progress + '%';
}

// 顯示完成訊息
function showCompletionMessage() {
    const stats = srsManager.getStats();

    elements.flashcard.innerHTML = `
        <div class="card-face card-front" style="transform: none;">
            <div style="text-align: center;">
                <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>
                <div style="font-size: 32px; margin-bottom: 20px;">恭喜！</div>
                <div style="font-size: 18px; line-height: 1.8;">
                    您已完成所有待復習的卡片<br>
                    已精通: ${stats.mastered} 張<br>
                    學習中: ${stats.learning} 張<br>
                    已封存: ${stats.archived} 張
                </div>
                <button onclick="location.reload()" 
                        style="margin-top: 30px; padding: 15px 30px; font-size: 16px; 
                               background: linear-gradient(135deg, #60a5fa, #a78bfa); 
                               border: none; border-radius: 12px; color: white; cursor: pointer;">
                    重新開始
                </button>
            </div>
        </div>
    `;

    // 隱藏按鈕
    elements.btnArchive.style.display = 'none';
    elements.btnForgot.style.display = 'none';
    elements.btnKnow.style.display = 'none';
}

// 當頁面載入完成後初始化
window.addEventListener('DOMContentLoaded', init);
