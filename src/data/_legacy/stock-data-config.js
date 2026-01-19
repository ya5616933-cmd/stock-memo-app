/**
 * 股票資料結構配置
 * 
 * 定義哪些欄位屬於哪個訂閱級別
 * 這樣未來可以輕鬆添加新的付費欄位
 */

const StockDataConfig = {
    // ========== 欄位與訂閱級別映射 ==========
    fieldTiers: {
        // 免費版欄位
        free: [
            'id',           // 股票代號
            'name',         // 公司名稱
            'industry',     // 產業
            'market',       // 上市/上櫃
            'description',  // 一句話描述
            'keyMetric'     // 關鍵指標
        ],

        // 付費版額外欄位
        premium: [
            'revenueMix',       // 產品營收組成 (預留)
            'marketShare',      // 市場佔有率 (預留)
            'competitors',      // 主要競爭者 (預留)
            'industryChain',    // 產業鏈位置 (預留)
            'financialMetrics'  // 財務指標 (預留)
        ],

        // 專業版額外欄位
        pro: [
            'aiInsights',       // AI 分析洞察 (預留)
            'investmentRisks',  // 投資風險分析 (預留)
            'moatAnalysis',     // 護城河分析 (預留)
            'valuationMetrics'  // 估值指標 (預留)
        ]
    },

    // ========== 欄位顯示配置 ==========
    fieldDisplay: {
        id: {
            label: '股票代號',
            tier: 'free',
            contentType: 'basic_info'
        },
        name: {
            label: '公司名稱',
            tier: 'free',
            contentType: 'basic_info'
        },
        industry: {
            label: '產業',
            tier: 'free',
            contentType: 'basic_info'
        },
        market: {
            label: '市場',
            tier: 'free',
            contentType: 'basic_info'
        },
        description: {
            label: '一句話描述',
            tier: 'free',
            contentType: 'description',
            blurrable: true  // 是否可模糊 (預留選項)
        },
        keyMetric: {
            label: '關鍵指標',
            tier: 'free',
            contentType: 'key_metric',
            blurrable: true  // 是否可模糊 (預留選項)
        },
        revenueMix: {
            label: '產品營收組成',
            tier: 'premium',
            contentType: 'revenue_mix',
            blurrable: true
        },
        marketShare: {
            label: '市場佔有率',
            tier: 'premium',
            contentType: 'key_metric',
            blurrable: true
        },
        competitors: {
            label: '主要競爭者',
            tier: 'premium',
            contentType: 'basic_info',
            blurrable: false
        },
        industryChain: {
            label: '產業鏈位置',
            tier: 'premium',
            contentType: 'industry_chain',
            blurrable: true
        },
        financialMetrics: {
            label: '財務指標',
            tier: 'premium',
            contentType: 'financial_data',
            blurrable: true
        },
        aiInsights: {
            label: 'AI 洞察',
            tier: 'pro',
            contentType: 'ai_insights',
            blurrable: true
        },
        investmentRisks: {
            label: '投資風險',
            tier: 'pro',
            contentType: 'ai_insights',
            blurrable: true
        },
        moatAnalysis: {
            label: '護城河分析',
            tier: 'pro',
            contentType: 'ai_insights',
            blurrable: true
        },
        valuationMetrics: {
            label: '估值指標',
            tier: 'pro',
            contentType: 'financial_data',
            blurrable: true
        }
    },

    // ========== 工具方法 ==========

    /**
     * 檢查欄位是否屬於特定訂閱級別
     * @param {string} fieldName - 欄位名稱
     * @param {string} tier - 訂閱級別
     * @returns {boolean}
     */
    isFieldInTier(fieldName, tier) {
        const config = this.fieldDisplay[fieldName];
        if (!config) return false;
        return config.tier === tier;
    },

    /**
     * 獲取用戶可存取的欄位列表
     * @param {string} userTier - 用戶訂閱級別
     * @returns {Array<string>}
     */
    getAccessibleFields(userTier) {
        const fields = [...this.fieldTiers.free];

        if (userTier === 'premium' || userTier === 'pro') {
            fields.push(...this.fieldTiers.premium);
        }

        if (userTier === 'pro') {
            fields.push(...this.fieldTiers.pro);
        }

        return fields;
    },

    /**
     * 檢查欄位是否應該模糊
     * @param {string} fieldName - 欄位名稱
     * @param {boolean} hasAccess - 是否有權限
     * @returns {boolean}
     */
    shouldBlurField(fieldName, hasAccess) {
        if (hasAccess) return false;

        const config = this.fieldDisplay[fieldName];
        return config && config.blurrable;
    },

    /**
     * 過濾股票資料，只保留用戶可存取的欄位
     * @param {Object} stockData - 原始股票資料
     * @param {string} userTier - 用戶訂閱級別
     * @returns {Object}
     */
    filterStockData(stockData, userTier) {
        const accessibleFields = this.getAccessibleFields(userTier);
        const filtered = {};

        accessibleFields.forEach(field => {
            if (stockData.hasOwnProperty(field)) {
                filtered[field] = stockData[field];
            }
        });

        // 總是保留 ID (作為識別用)
        filtered.id = stockData.id;

        return filtered;
    },

    /**
     * 獲取被鎖定的欄位列表
     * @param {string} userTier - 用戶訂閱級別
     * @returns {Array<string>}
     */
    getLockedFields(userTier) {
        const allFields = Object.keys(this.fieldDisplay);
        const accessibleFields = this.getAccessibleFields(userTier);

        return allFields.filter(field => !accessibleFields.includes(field));
    },

    /**
     * 獲取欄位的內容類型
     * @param {string} fieldName - 欄位名稱
     * @returns {string|null}
     */
    getFieldContentType(fieldName) {
        const config = this.fieldDisplay[fieldName];
        return config ? config.contentType : null;
    }
};

// 全域可用
window.StockDataConfig = StockDataConfig;

console.log('✓ 股票資料結構配置已載入');
