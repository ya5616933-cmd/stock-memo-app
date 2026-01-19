/**
 * UI 組件系統 - 付費內容視覺處理
 * 
 * 提供可重複使用的 UI 組件來顯示鎖定/解鎖內容
 */

class UIComponents {

    /**
     * 為鎖定的內容添加模糊效果
     * @param {HTMLElement} element - DOM 元素
     * @param {boolean} shouldBlur - 是否模糊
     */
    static applyBlur(element, shouldBlur) {
        if (shouldBlur) {
            element.classList.add('content-locked');
            element.setAttribute('data-locked', 'true');
        } else {
            element.classList.remove('content-locked');
            element.removeAttribute('data-locked');
        }
    }

    /**
     * 創建鎖定提示 Badge
     * @param {string} contentType - 內容類型
     * @returns {HTMLElement}
     */
    static createLockBadge(contentType = '') {
        const badge = document.createElement('div');
        badge.className = 'lock-badge';
        badge.innerHTML = `
            <span class="lock-icon">🔒</span>
            <span class="lock-text">升級解鎖</span>
        `;
        badge.setAttribute('data-content-type', contentType);
        return badge;
    }

    /**
     * 創建升級提示卡片
     * @param {Object} options - 配置選項
     * @returns {HTMLElement}
     */
    static createUpgradePrompt(options = {}) {
        const {
            title = '解鎖完整功能',
            features = ['完整 191+ 家公司資料', '產品營收組成分析', '更多進階指標'],
            price = '$3.99',
            buttonText = '立即升級'
        } = options;

        const prompt = document.createElement('div');
        prompt.className = 'upgrade-prompt';
        prompt.innerHTML = `
            <div class="upgrade-prompt-content">
                <div class="upgrade-icon">✨</div>
                <h3 class="upgrade-title">${title}</h3>
                <ul class="upgrade-features">
                    ${features.map(f => `<li>✓ ${f}</li>`).join('')}
                </ul>
                <div class="upgrade-price">${price}</div>
                <button class="btn-upgrade" data-action="upgrade">
                    ${buttonText}
                </button>
                <button class="btn-close-prompt" data-action="close">
                    稍後再說
                </button>
            </div>
        `;
        return prompt;
    }

    /**
     * 為內容添加「點擊解鎖」提示
     * @param {HTMLElement} element - DOM 元素
     * @param {Function} onClickCallback - 點擊時的回調函數
     */
    static makeUnlockable(element, onClickCallback) {
        element.classList.add('unlockable');
        element.style.cursor = 'pointer';

        const unlockHint = document.createElement('div');
        unlockHint.className = 'unlock-hint';
        unlockHint.innerHTML = '點擊升級解鎖 🔓';

        element.appendChild(unlockHint);

        element.addEventListener('click', (e) => {
            e.stopPropagation();
            if (onClickCallback) {
                onClickCallback();
            }
        });
    }

    /**
     * 顯示升級模態框
     * @param {Object} upgradeInfo - 升級資訊
     */
    static showUpgradeModal(upgradeInfo = {}) {
        // 移除已存在的模態框
        const existingModal = document.querySelector('.upgrade-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'upgrade-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close" aria-label="關閉">×</button>
                <div class="modal-header">
                    <div class="modal-icon">🚀</div>
                    <h2>升級至完整版</h2>
                    <p class="modal-subtitle">解鎖所有進階功能，建立您的投資知識庫</p>
                </div>
                
                <div class="modal-body">
                    <div class="pricing-card">
                        <div class="pricing-option">
                            <div class="option-badge">推薦</div>
                            <h3>完整版</h3>
                            <div class="price">
                                <span class="price-amount">$3.99</span>
                                <span class="price-label">一次性購買</span>
                            </div>
                            <ul class="feature-list">
                                <li>✓ 完整 191+ 家台股公司資料</li>
                                <li>✓ 產品營收組成分析</li>
                                <li>✓ 進階財務指標</li>
                                <li>✓ 產業鏈關聯分析</li>
                                <li>✓ 終身免費更新</li>
                            </ul>
                            <button class="btn-purchase" data-tier="premium">
                                立即解鎖
                            </button>
                        </div>
                    </div>

                    <div class="free-tier-info">
                        <h4>免費版功能</h4>
                        <ul>
                            <li>• 50 家頂級公司</li>
                            <li>• 基本資訊與描述</li>
                            <li>• SRS 記憶系統</li>
                        </ul>
                    </div>
                </div>

                <div class="modal-footer">
                    <p class="payment-security">🔒 安全付款 | 7 天無條件退款</p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 綁定關閉事件
        const closeModal = () => modal.remove();
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

        // 綁定購買按鈕 (目前為示範，實際需整合支付)
        modal.querySelector('.btn-purchase').addEventListener('click', () => {
            UIComponents.handlePurchase('premium');
        });

        // 添加淡入動畫
        setTimeout(() => modal.classList.add('show'), 10);
    }

    /**
     * 處理購買流程 (預留)
     * @param {string} tier - 訂閱級別
     */
    static handlePurchase(tier) {
        // TODO: 整合實際支付系統
        // 目前為示範，直接升級

        if (confirm('示範模式：直接升級至付費版？\n(實際版本會整合支付系統)')) {
            window.contentAccessManager.upgradeTier(tier);

            // 顯示成功訊息
            UIComponents.showSuccessMessage('升級成功！正在重新載入...');

            // 重新載入頁面以應用變更
            setTimeout(() => {
                location.reload();
            }, 1500);
        }
    }

    /**
     * 顯示成功訊息
     * @param {string} message - 訊息內容
     */
    static showSuccessMessage(message) {
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.innerHTML = `
            <span class="toast-icon">✓</span>
            <span class="toast-message">${message}</span>
        `;

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /**
     * 在卡片上顯示鎖定覆蓋層
     * @param {HTMLElement} cardElement - 卡片元素
     * @param {string} contentType - 內容類型
     */
    static addLockOverlay(cardElement, contentType) {
        const overlay = document.createElement('div');
        overlay.className = 'lock-overlay';
        overlay.innerHTML = `
            <div class="lock-overlay-content">
                <div class="lock-overlay-icon">🔒</div>
                <div class="lock-overlay-text">此內容需要升級</div>
                <button class="lock-overlay-button">立即解鎖</button>
            </div>
        `;

        overlay.querySelector('.lock-overlay-button').addEventListener('click', (e) => {
            e.stopPropagation();
            UIComponents.showUpgradeModal();
        });

        cardElement.style.position = 'relative';
        cardElement.appendChild(overlay);
    }

    /**
     * 創建股票數量限制提示
     * @param {number} currentIndex - 當前索引
     * @param {number} limit - 限制數量
     * @returns {HTMLElement}
     */
    static createStockLimitPrompt(currentIndex, limit) {
        const prompt = document.createElement('div');
        prompt.className = 'stock-limit-prompt';
        prompt.innerHTML = `
            <div class="limit-prompt-content">
                <div class="limit-icon">📊</div>
                <h3>已達免費版限制</h3>
                <p>免費版僅提供前 ${limit} 家公司</p>
                <p class="limit-detail">升級以解鎖完整 191+ 家公司資料</p>
                <button class="btn-upgrade-now" data-action="upgrade">
                    查看升級方案
                </button>
            </div>
        `;

        prompt.querySelector('.btn-upgrade-now').addEventListener('click', () => {
            UIComponents.showUpgradeModal();
        });

        return prompt;
    }
}

console.log('✓ UI 組件系統已載入');
