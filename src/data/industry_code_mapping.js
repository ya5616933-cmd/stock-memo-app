// 產業名稱轉代碼對照表（基於 TWSE 分類）
// 用於將舊資料的中文產業名稱轉換為產業代碼

const INDUSTRY_NAME_TO_CODE = {
    "水泥工業": "01",
    "食品工業": "02",
    "塑膠工業": "03",
    "紡織纖維": "04",
    "電機機械": "05",
    "電器電纜": "06",
    "電線電纜": "06",  // 別名
    "玻璃陶瓷": "08",
    "造紙工業": "09",
    "鋼鐵工業": "10",
    "橡膠工業": "11",
    "汽車工業": "12",
    "建材營造": "14",
    "航運業": "15",
    "觀光事業": "16",
    "金融保險業": "17",
    "其他金融業": "17",  // 歸類為金融保險業
    "貿易百貨業": "18",
    "貿易百貨": "18",  // 別名
    "其他": "20",
    "其他業": "20",  // 別名
    "化學工業": "21",
    "生技醫療業": "22",
    "油電燃氣業": "23",
    "半導體業": "24",
    "電腦及周邊設備業": "25",
    "光電業": "26",
    "光學業": "26",  // 歸類為光電業
    "通信網路業": "27",
    "電子零組件業": "28",
    "電子通路業": "29",
    "資訊服務業": "30",
    "其他電子業": "31",
    "電子業": "31"  // 歸類為其他電子業
};

// 產業代碼轉名稱對照表（標準名稱）
const INDUSTRY_CODE_TO_NAME = {
    "01": "水泥工業",
    "02": "食品工業",
    "03": "塑膠工業",
    "04": "紡織纖維",
    "05": "電機機械",
    "06": "電器電纜",
    "08": "玻璃陶瓷",
    "09": "造紙工業",
    "10": "鋼鐵工業",
    "11": "橡膠工業",
    "12": "汽車工業",
    "14": "建材營造",
    "15": "航運業",
    "16": "觀光事業",
    "17": "金融保險業",
    "18": "貿易百貨",
    "20": "其他",
    "21": "化學工業",
    "22": "生技醫療業",
    "23": "油電燃氣業",
    "24": "半導體業",
    "25": "電腦及周邊設備業",
    "26": "光電業",
    "27": "通信網路業",
    "28": "電子零組件業",
    "29": "電子通路業",
    "30": "資訊服務業",
    "31": "其他電子業"
};

// 將產業名稱轉為代碼
function getIndustryCode(industryName) {
    const code = INDUSTRY_NAME_TO_CODE[industryName];
    if (!code) {
        console.warn(`未找到產業代碼對應: ${industryName}，使用預設值 "20" (其他)`);
        return "20";
    }
    return code;
}

// 將產業代碼轉為名稱
function getIndustryName(code) {
    return INDUSTRY_CODE_TO_NAME[code] || `產業${code}`;
}

// 瀏覽器環境使用
if (typeof window !== 'undefined') {
    window.INDUSTRY_NAME_TO_CODE = INDUSTRY_NAME_TO_CODE;
    window.INDUSTRY_CODE_TO_NAME = INDUSTRY_CODE_TO_NAME;
    window.getIndustryCode = getIndustryCode;
    window.getIndustryName = getIndustryName;
}

// Node.js 環境使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        INDUSTRY_NAME_TO_CODE,
        INDUSTRY_CODE_TO_NAME,
        getIndustryCode,
        getIndustryName
    };
}
