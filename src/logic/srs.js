/**
 * 間隔重複系統 (Spaced Repetition System - SRS)
 * 基於 SM-2 演算法的簡化版本
 */

class SRSCard {
    constructor(stockData) {
        this.id = stockData.id;
        this.data = stockData;
        this.interval = 0;           // 複習間隔 (分鐘)
        this.easeFactor = 2.5;       // 難易度因子
        this.repetitions = 0;        // 已複習次數
        this.nextReview = Date.now(); // 下次複習時間
        this.lastReview = null;      // 上次複習時間
        this.status = 'new';         // new, learning, mastered, archived
    }

    // 回答「記得」
    recordSuccess() {
        this.lastReview = Date.now();
        this.repetitions++;

        if (this.repetitions === 1) {
            this.interval = 1;       // 1 分鐘
            this.status = 'learning';
        } else if (this.repetitions === 2) {
            this.interval = 10;      // 10 分鐘
        } else if (this.repetitions === 3) {
            this.interval = 60 * 24; // 1 天
        } else {
            this.interval = Math.round(this.interval * this.easeFactor);
            this.status = 'mastered';
        }

        // 提高難易度因子 (最大 2.5)
        this.easeFactor = Math.min(2.5, this.easeFactor + 0.1);

        // 計算下次複習時間
        this.nextReview = Date.now() + (this.interval * 60 * 1000);
    }

    // 回答「忘記了」
    recordForgot() {
        this.lastReview = Date.now();
        this.repetitions = 0;
        this.interval = 1; // 重置為 1 分鐘
        this.status = 'learning';

        // 降低難易度因子 (最小 1.3)
        this.easeFactor = Math.max(1.3, this.easeFactor - 0.2);

        this.nextReview = Date.now() + (this.interval * 60 * 1000);
    }

    // 標記為「太難」(封存)
    archive() {
        this.status = 'archived';
        this.nextReview = Infinity; // 永不複習
    }

    // 是否到了複習時間
    isDue() {
        return this.status !== 'archived' && Date.now() >= this.nextReview;
    }

    // 取得進度百分比 (0-100)
    getProgress() {
        if (this.status === 'archived') return 0;
        if (this.status === 'mastered') return 100;
        return Math.min(100, (this.repetitions / 3) * 100);
    }
}

class SRSManager {
    constructor() {
        this.cards = [];
        this.loadFromStorage();
    }

    // 添加卡片
    addCards(stockDataArray) {
        stockDataArray.forEach(stockData => {
            const existing = this.cards.find(c => c.id === stockData.id);
            if (!existing) {
                this.cards.push(new SRSCard(stockData));
            }
        });
        this.saveToStorage();
    }

    // 取得待複習的卡片
    getDueCards() {
        return this.cards.filter(card => card.isDue())
            .sort((a, b) => a.nextReview - b.nextReview);
    }

    // 取得下一張卡片
    getNextCard() {
        const dueCards = this.getDueCards();
        return dueCards.length > 0 ? dueCards[0] : null;
    }

    // 記錄回答
    recordAnswer(cardId, answer) {
        const card = this.cards.find(c => c.id === cardId);
        if (!card) return;

        if (answer === 'know') {
            card.recordSuccess();
        } else if (answer === 'forgot') {
            card.recordForgot();
        } else if (answer === 'archive') {
            card.archive();
        }

        this.saveToStorage();
    }

    // 統計資料
    getStats() {
        const mastered = this.cards.filter(c => c.status === 'mastered').length;
        const learning = this.cards.filter(c => c.status === 'learning').length;
        const archived = this.cards.filter(c => c.status === 'archived').length;
        const newCards = this.cards.filter(c => c.status === 'new').length;

        return {
            mastered,
            learning,
            archived,
            remaining: newCards,
            total: this.cards.length,
            progress: Math.round((mastered / this.cards.length) * 100)
        };
    }

    // 儲存到 LocalStorage
    saveToStorage() {
        const data = this.cards.map(card => ({
            id: card.id,
            interval: card.interval,
            easeFactor: card.easeFactor,
            repetitions: card.repetitions,
            nextReview: card.nextReview,
            lastReview: card.lastReview,
            status: card.status
        }));
        localStorage.setItem('srs_cards', JSON.stringify(data));
    }

    // 從 LocalStorage 載入
    loadFromStorage() {
        const saved = localStorage.getItem('srs_cards');
        if (!saved) return;

        try {
            const data = JSON.parse(saved);
            // 注意：這裡只載入進度，實際股票資料需要從 JSON 載入
            this.savedProgress = data;
        } catch (e) {
            console.error('Failed to load SRS data:', e);
        }
    }

    // 恢復進度
    restoreProgress() {
        if (!this.savedProgress) return;

        this.savedProgress.forEach(saved => {
            const card = this.cards.find(c => c.id === saved.id);
            if (card) {
                Object.assign(card, saved);
            }
        });
        this.savedProgress = null;
    }

    // 重置所有進度
    reset() {
        this.cards.forEach(card => {
            card.interval = 0;
            card.easeFactor = 2.5;
            card.repetitions = 0;
            card.nextReview = Date.now();
            card.lastReview = null;
            card.status = 'new';
        });
        this.saveToStorage();
    }
}
