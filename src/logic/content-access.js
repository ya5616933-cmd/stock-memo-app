/**
 * 內容存取控制系統 (Content Access Control)
 * 
 * 用途：管理用戶對不同內容層級的存取權限
 * 設計原則：擴充性 - 可輕鬆添加新的訂閱級別和功能
 */

class ContentAccessManager {
    constructor() {
        // 從 LocalStorage 載入用戶權限
        this.loadUserPermissions();
    }

    // ========== 權限級別定義 ==========
    static TIERS = {
        FREE: 'free',           // 免費版
        PREMIUM: 'premium',     // 付費版
        PRO: 'pro'              // 專業版 (預留)
    };

    // ========== 內容類型定義 ==========
    static CONTENT_TYPES = {
        BASIC_INFO: 'basic_info',           // 基本資訊 (代號、名稱、產業)
        DESCRIPTION: 'description',         // 一句話描述
        KEY_METRIC: 'key_metric',           // 關鍵指標
        REVENUE_MIX: 'revenue_mix',         // 產品營收組成 (預留)
        FINANCIAL_DATA: 'financial_data',   // 財務數據 (預留)
        INDUSTRY_CHAIN: 'industry_chain',   // 產業鏈分析 (預留)
        AI_INSIGHTS: 'ai_insights'          // AI 洞察 (預留)
    };

    // ========== 存取規則配置 ==========
    static ACCESS_RULES = {
        // 免費版可存取的內容
        [ContentAccessManager.TIERS.FREE]: [
            ContentAccessManager.CONTENT_TYPES.BASIC_INFO,
            // ContentAccessManager.CONTENT_TYPES.DESCRIPTION, // 移至付費解鎖
            ContentAccessManager.CONTENT_TYPES.KEY_METRIC
        ],

        // 付費版額外可存取的內容
        [ContentAccessManager.TIERS.PREMIUM]: [
            ContentAccessManager.CONTENT_TYPES.DESCRIPTION, // 解鎖描述
            ContentAccessManager.CONTENT_TYPES.REVENUE_MIX,
            ContentAccessManager.CONTENT_TYPES.FINANCIAL_DATA
        ],

        // 專業版額外可存取的內容
        [ContentAccessManager.TIERS.PRO]: [
            ContentAccessManager.CONTENT_TYPES.INDUSTRY_CHAIN,
            ContentAccessManager.CONTENT_TYPES.AI_INSIGHTS
        ]
    };

    // ========== 股票數量限制 ==========
    static STOCK_LIMITS = {
        [ContentAccessManager.TIERS.FREE]: 50,      // 免費版：50 家公司
        [ContentAccessManager.TIERS.PREMIUM]: null, // 付費版：無限制
        [ContentAccessManager.TIERS.PRO]: null      // 專業版：無限制
    };

    // ========== 用戶權限管理 ==========

    loadUserPermissions() {
        const saved = localStorage.getItem('user_permissions');
        if (saved) {
            try {
                this.userPermissions = JSON.parse(saved);
            } catch (e) {
                console.error('Failed to load user permissions:', e);
                this.setDefaultPermissions();
            }
        } else {
            this.setDefaultPermissions();
        }
    }

    setDefaultPermissions() {
        this.userPermissions = {
            tier: ContentAccessManager.TIERS.FREE,
            purchasedDate: null,
            expiryDate: null,
            features: []
        };
        this.saveUserPermissions();
    }

    saveUserPermissions() {
        localStorage.setItem('user_permissions', JSON.stringify(this.userPermissions));
    }

    // ========== 權限查詢 ==========

    /**
     * 獲取用戶當前訂閱級別
     */
    getUserTier() {
        return this.userPermissions.tier;
    }

    /**
     * 檢查用戶是否有權限存取某類型內容
     * @param {string} contentType - 內容類型
     * @returns {boolean}
     */
    canAccess(contentType) {
        const tier = this.userPermissions.tier;

        // 檢查當前級別的存取權限
        if (this.hasAccessInTier(tier, contentType)) {
            return true;
        }

        return false;
    }

    /**
     * 檢查特定級別是否可存取內容
     */
    hasAccessInTier(tier, contentType) {
        // 免費版權限
        if (ContentAccessManager.ACCESS_RULES[ContentAccessManager.TIERS.FREE].includes(contentType)) {
            return true;
        }

        // 付費版及以上權限
        if (tier === ContentAccessManager.TIERS.PREMIUM || tier === ContentAccessManager.TIERS.PRO) {
            if (ContentAccessManager.ACCESS_RULES[ContentAccessManager.TIERS.PREMIUM].includes(contentType)) {
                return true;
            }
        }

        // 專業版權限
        if (tier === ContentAccessManager.TIERS.PRO) {
            if (ContentAccessManager.ACCESS_RULES[ContentAccessManager.TIERS.PRO].includes(contentType)) {
                return true;
            }
        }

        return false;
    }

    /**
     * 獲取用戶可存取的股票數量限制
     * @returns {number|null} - 數量限制，null 表示無限制
     */
    getStockLimit() {
        return ContentAccessManager.STOCK_LIMITS[this.userPermissions.tier];
    }

    /**
     * 檢查是否可存取特定索引的股票
     * @param {number} stockIndex - 股票在陣列中的索引
     * @returns {boolean}
     */
    canAccessStock(stockIndex) {
        const limit = this.getStockLimit();
        if (limit === null) return true;
        return stockIndex < limit;
    }

    // ========== 內容處理 ==========

    /**
     * 處理需要權限控制的內容
     * @param {string} content - 原始內容
     * @param {string} contentType - 內容類型
     * @param {Object} options - 選項 { blurred: boolean }
     * @returns {Object} - { content: string, isLocked: boolean, shouldBlur: boolean }
     */
    processContent(content, contentType, options = {}) {
        const hasAccess = this.canAccess(contentType);

        if (hasAccess) {
            return {
                content: content,
                isLocked: false,
                shouldBlur: false
            };
        }

        // 無權限時的處理
        const { blurred = true } = options;

        return {
            content: blurred ? content : '🔒 升級以解鎖',
            isLocked: true,
            shouldBlur: blurred
        };
    }

    // ========== 升級管理 (預留) ==========

    /**
     * 升級用戶訂閱級別
     * @param {string} newTier - 新的訂閱級別
     */
    upgradeTier(newTier) {
        this.userPermissions.tier = newTier;
        this.userPermissions.purchasedDate = new Date().toISOString();

        // 如果是訂閱制，設定到期日 (目前設定為一年後)
        // 可根據實際購買方案調整
        if (newTier !== ContentAccessManager.TIERS.FREE) {
            const expiryDate = new Date();
            expiryDate.setFullYear(expiryDate.getFullYear() + 1);
            this.userPermissions.expiryDate = expiryDate.toISOString();
        }

        this.saveUserPermissions();

        console.log(`✓ 已升級至 ${newTier}`);
    }

    /**
     * 重置為免費版 (測試用)
     */
    resetToFree() {
        this.setDefaultPermissions();
        console.log('✓ 已重置為免費版');
    }

    // ========== 功能開關 (預留細粒度控制) ==========

    /**
     * 啟用特定功能
     * @param {string} featureName - 功能名稱
     */
    enableFeature(featureName) {
        if (!this.userPermissions.features.includes(featureName)) {
            this.userPermissions.features.push(featureName);
            this.saveUserPermissions();
        }
    }

    /**
     * 檢查功能是否已啟用
     * @param {string} featureName - 功能名稱
     * @returns {boolean}
     */
    isFeatureEnabled(featureName) {
        return this.userPermissions.features.includes(featureName);
    }

    // ========== 資訊查詢 ==========

    /**
     * 獲取升級資訊
     * @returns {Object}
     */
    getUpgradeInfo() {
        const currentTier = this.userPermissions.tier;

        return {
            currentTier: currentTier,
            isFree: currentTier === ContentAccessManager.TIERS.FREE,
            stockLimit: this.getStockLimit(),
            unlockedContent: this.getUnlockedContentTypes(),
            lockedContent: this.getLockedContentTypes()
        };
    }

    getUnlockedContentTypes() {
        const tier = this.userPermissions.tier;
        const unlocked = [...ContentAccessManager.ACCESS_RULES[ContentAccessManager.TIERS.FREE]];

        if (tier === ContentAccessManager.TIERS.PREMIUM || tier === ContentAccessManager.TIERS.PRO) {
            unlocked.push(...ContentAccessManager.ACCESS_RULES[ContentAccessManager.TIERS.PREMIUM]);
        }

        if (tier === ContentAccessManager.TIERS.PRO) {
            unlocked.push(...ContentAccessManager.ACCESS_RULES[ContentAccessManager.TIERS.PRO]);
        }

        return unlocked;
    }

    getLockedContentTypes() {
        const unlocked = this.getUnlockedContentTypes();
        return Object.values(ContentAccessManager.CONTENT_TYPES)
            .filter(type => !unlocked.includes(type));
    }
}

// 全域實例
window.contentAccessManager = new ContentAccessManager();

console.log('✓ 內容存取控制系統已載入');
