// 台股公司資料庫 - 按產業代碼分類
// 資料來源：台灣證券交易所、台灣中型100指數成分股
// 最後更新：2026-01-20
// 架構：31 個產業分類，共 185 家公司（持續更新中）

// ============================================================================
// 資料結構說明
// ============================================================================
// {
//   "01": {                          // 產業代碼 (兩位數字串)
//     "industryCode": "01",          // 產業代碼
//     "industryName": "水泥工業",     // 產業中文名稱
//     "companies": [                  // 該產業所有公司
//       {
//         "id": "1101",               // 股票代號
//         "name": "台灣水泥",          // 公司名稱
//         "market": "上市",            // 市場別（上市/上櫃）
//         "description": "...",       // 業務描述
//         "keyMetric": ""             // 關鍵指標
//       }
//     ]
//   }
// }
// ============================================================================

window.STOCKS_DATA_BY_INDUSTRY = {

    // ========== 01 - 水泥工業 ==========
    "01": {
        "industryCode": "01",
        "industryName": "水泥工業",
        "companies": [
            { "id": "1101", "name": "台灣水泥", "market": "上市", "description": "水泥製造與銷售，並跨足能源、環保產業", "keyMetric": "" },
            { "id": "1102", "name": "亞洲水泥", "market": "上市", "description": "水泥生產與預拌混凝土", "keyMetric": "" },
            { "id": "1103", "name": "嘉泥", "market": "上市", "description": "水泥與資產開發", "keyMetric": "轉型資產開發" }
        ]
    },

    // ========== 02 - 食品工業 ==========
    "02": {
        "industryCode": "02",
        "industryName": "食品工業",
        "companies": [
            { "id": "1201", "name": "味全", "market": "上市", "description": "乳品、飲料、食品製造", "keyMetric": "" },
            { "id": "1210", "name": "大成", "market": "上市", "description": "飼料、雞肉加工", "keyMetric": "台灣飼料肉品龍頭" },
            { "id": "1215", "name": "卜蜂", "market": "上市", "description": "飼料、肉品加工", "keyMetric": "正大集團子公司" },
            { "id": "1216", "name": "統一企業", "market": "上市", "description": "食品飲料製造販售、流通事業", "keyMetric": "台灣最大食品集團" },
            { "id": "1227", "name": "佳格", "market": "上市", "description": "穀物、保健食品、食用油", "keyMetric": "桂格燕麥代理" },
            { "id": "1229", "name": "聯華", "market": "上市", "description": "麵粉、飼料製造", "keyMetric": "台灣最大麵粉廠" },
            { "id": "1231", "name": "聯華食", "market": "上市", "description": "休閒食品（可樂果、萬歲牌）", "keyMetric": "台灣休閒食品龍頭" },
            { "id": "1232", "name": "大統益", "market": "上市", "description": "黃豆油、沙拉油製造", "keyMetric": "台灣最大食用油廠" }
        ]
    },

    // ========== 03 - 塑膠工業 ==========
    "03": {
        "industryCode": "03",
        "industryName": "塑膠工業",
        "companies": [
            { "id": "1301", "name": "台塑", "market": "上市", "description": "PVC、PE 等塑膠原料製造", "keyMetric": "台塑四寶之一" },
            { "id": "1303", "name": "南亞", "market": "上市", "description": "電子材料、化工原料製造", "keyMetric": "台塑四寶之一" },
            { "id": "1326", "name": "台化", "market": "上市", "description": "石化原料、塑膠加工", "keyMetric": "台塑四寶之一" }
        ]
    },

    // ========== 04 - 紡織纖維 ==========
    "04": {
        "industryCode": "04",
        "industryName": "紡織纖維",
        "companies": [
            { "id": "1402", "name": "遠東新", "market": "上市", "description": "聚酯纖維、化纖製造", "keyMetric": "全球最大聚酯纖維廠" },
            { "id": "1434", "name": "福懋", "market": "上市", "description": "假撚加工絲", "keyMetric": "" },
            { "id": "1451", "name": "年興", "market": "上市", "description": "牛仔布製造", "keyMetric": "" },
            { "id": "1476", "name": "儒鴻", "market": "上市", "description": "機能性布料、成衣製造", "keyMetric": "Nike、Adidas 供應商" },
            { "id": "1477", "name": "聚陽", "market": "上市", "description": "成衣代工", "keyMetric": "Uniqlo 主要供應商" },
            { "id": "1718", "name": "中纖", "market": "上市", "description": "聚酯纖維製造", "keyMetric": "" }
        ]
    },

    // ========== 05 - 電機機械 ==========
    "05": {
        "industryCode": "05",
        "industryName": "電機機械",
        "companies": [
            { "id": "1503", "name": "士電", "market": "上市", "description": "變壓器、電力設備", "keyMetric": "" },
            { "id": "1504", "name": "東元", "market": "上市", "description": "馬達、家電製造", "keyMetric": "台灣最大馬達廠" },
            { "id": "1507", "name": "永大", "market": "上市", "description": "電梯製造", "keyMetric": "" },
            { "id": "1513", "name": "中興電", "market": "上市", "description": "電力設備、重電機械", "keyMetric": "" },
            { "id": "1519", "name": "華城", "market": "上市", "description": "變壓器、電力設備", "keyMetric": "" },
            { "id": "1590", "name": "亞德客-KY", "market": "上市", "description": "氣動元件製造", "keyMetric": "全球第二大氣動元件廠" },
            { "id": "2049", "name": "上銀", "market": "上市", "description": "線性滑軌、滾珠螺桿製造", "keyMetric": "台灣精密機械龍頭" },
            { "id": "3653", "name": "健策", "market": "上市", "description": "精密齒輪、傳動元件", "keyMetric": "" },
            { "id": "9933", "name": "中鼎", "market": "上市", "description": "工程統包", "keyMetric": "" }
        ]
    },

    // ========== 06 - 電器電纜 ==========
    "06": {
        "industryCode": "06",
        "industryName": "電器電纜",
        "companies": [
            { "id": "1605", "name": "華新", "market": "上市", "description": "電線電纜、不銹鋼製造", "keyMetric": "焦家龍頭企業" },
            { "id": "1608", "name": "華榮", "market": "上市", "description": "電線電纜、銅線製造", "keyMetric": "" },
            { "id": "1609", "name": "大亞", "market": "上市", "description": "電線電纜、綠能開發", "keyMetric": "能源鏈佈局完整" },
            { "id": "1611", "name": "中電", "market": "上市", "description": "照明設備製造（東亞照明）", "keyMetric": "老牌照明大廠" },
            { "id": "1618", "name": "合機", "market": "上市", "description": "電線電纜製造", "keyMetric": "台電強韌電網受惠" }
        ]
    },

    // ========== 07 - 化學生技醫療業 (未使用) ==========
    "07": {
        "industryCode": "07",
        "industryName": "化學生技醫療業",
        "companies": []
    },

    // ========== 08 - 玻璃陶瓷 ==========
    "08": {
        "industryCode": "08",
        "industryName": "玻璃陶瓷",
        "companies": [
            { "id": "1802", "name": "台玻", "market": "上市", "description": "平板玻璃、玻纖布", "keyMetric": "台灣最大玻璃廠" },
            { "id": "1806", "name": "冠軍", "market": "上市", "description": "磁磚製造", "keyMetric": "台灣磁磚龍頭" },
            { "id": "1809", "name": "中釉", "market": "上市", "description": "陶瓷釉料、光電材料", "keyMetric": "" },
            { "id": "1810", "name": "和成", "market": "上市", "description": "衛浴設備（HCG）", "keyMetric": "台灣衛浴龍頭" },
            { "id": "1817", "name": "凱撒衛", "market": "上市", "description": "衛浴設備（Caesar）", "keyMetric": "台灣衛浴大廠" }
        ]
    },

    // ========== 09 - 造紙工業 ==========
    "09": {
        "industryCode": "09",
        "industryName": "造紙工業",
        "companies": [
            { "id": "1904", "name": "正隆", "market": "上市", "description": "工業用書、紙器包裝", "keyMetric": "台灣最大工業用紙廠" },
            { "id": "1907", "name": "永豐餘", "market": "上市", "description": "紙類、科技、生技投資控股", "keyMetric": "轉型投資控股公司" },
            { "id": "1909", "name": "榮成", "market": "上市", "description": "工業用紙製造", "keyMetric": "專注中國市場" }
        ]
    },

    // ========== 10 - 鋼鐵工業 ==========
    "10": {
        "industryCode": "10",
        "industryName": "鋼鐵工業",
        "companies": [
            { "id": "2002", "name": "中鋼", "market": "上市", "description": "鋼鐵產品製造與銷售", "keyMetric": "台灣最大鋼鐵廠" },
            { "id": "2006", "name": "東和鋼鐵", "market": "上市", "description": "鋼筋、鋼材製造", "keyMetric": "" },
            { "id": "2014", "name": "中鴻", "market": "上市", "description": "鋼鐵製造", "keyMetric": "" },
            { "id": "2027", "name": "大成鋼", "market": "上市", "description": "不銹鋼製造與加工", "keyMetric": "" }
        ]
    },

    // ========== 11 - 橡膠工業 ==========
    "11": {
        "industryCode": "11",
        "industryName": "橡膠工業",
        "companies": [
            { "id": "2101", "name": "南港", "market": "上市", "description": "輪胎製造", "keyMetric": "老牌輪胎廠" },
            { "id": "2103", "name": "台橡", "market": "上市", "description": "合成橡膠製造", "keyMetric": "全球主要合成橡膠廠" },
            { "id": "2104", "name": "國際中橡", "market": "上市", "description": "碳黑製造", "keyMetric": "全球知名碳黑廠" },
            { "id": "2105", "name": "正新", "market": "上市", "description": "輪胎製造（Maxxis）", "keyMetric": "全球第九大輪胎廠" },
            { "id": "2106", "name": "建大", "market": "上市", "description": "輪胎製造", "keyMetric": "自行車胎全球市佔高" },
            { "id": "2108", "name": "南帝", "market": "上市", "description": "乳膠、合成橡膠", "keyMetric": "全球最大醫療手套乳膠供應商" }
        ]
    },

    // ========== 12 - 汽車工業 ==========
    "12": {
        "industryCode": "12",
        "industryName": "汽車工業",
        "companies": [
            { "id": "1319", "name": "東陽", "market": "上市", "description": "汽車零組件製造", "keyMetric": "台灣最大汽車零件廠" },
            { "id": "1536", "name": "和大", "market": "上市", "description": "汽車齒輪、傳動系統", "keyMetric": "電動車齒輪供應商" },
            { "id": "2201", "name": "裕隆", "market": "上市", "description": "汽車製造", "keyMetric": "" },
            { "id": "2206", "name": "三陽工業", "market": "上市", "description": "機車製造", "keyMetric": "" },
            { "id": "2207", "name": "和泰車", "market": "上市", "description": "Toyota、Lexus 台灣總代理", "keyMetric": "台灣汽車銷售龍頭" },
            { "id": "2227", "name": "裕日車", "market": "上市", "description": "日產汽車台灣總代理", "keyMetric": "" },
            { "id": "2258", "name": "鴻華先進", "market": "上市", "description": "電動車研發製造", "keyMetric": "鴻海電動車子公司" }
        ]
    },

    // ========== 13 - (未使用) ==========
    "13": {
        "industryCode": "13",
        "industryName": "其他",
        "companies": []
    },

    // ========== 14 - 建材營造 ==========
    "14": {
        "industryCode": "14",
        "industryName": "建材營造",
        "companies": [
            { "id": "2328", "name": "廣宇", "market": "上市", "description": "建設開發", "keyMetric": "" },
            { "id": "2501", "name": "國建", "market": "上市", "description": "建設開發", "keyMetric": "" },
            { "id": "2504", "name": "國產", "market": "上市", "description": "預拌混凝土", "keyMetric": "" },
            { "id": "2535", "name": "達欣工", "market": "上市", "description": "營造工程", "keyMetric": "" },
            { "id": "2540", "name": "愛山林", "market": "上市", "description": "建設開發", "keyMetric": "" },
            { "id": "2542", "name": "興富發", "market": "上市", "description": "建設開發", "keyMetric": "" },
            { "id": "2923", "name": "鼎固-KY", "market": "上市", "description": "不動產開發", "keyMetric": "" },
            { "id": "4137", "name": "麗豐-KY", "market": "上市", "description": "不動產開發", "keyMetric": "" },
            { "id": "5522", "name": "遠雄", "market": "上市", "description": "建設開發", "keyMetric": "" },
            { "id": "6139", "name": "亞翔", "market": "上市", "description": "無塵室工程", "keyMetric": "" }
        ]
    },

    // ========== 15 - 航運業 ==========
    "15": {
        "industryCode": "15",
        "industryName": "航運業",
        "companies": [
            { "id": "2603", "name": "長榮", "market": "上市", "description": "海運貨櫃運輸", "keyMetric": "全球前十大海運公司" },
            { "id": "2606", "name": "裕民", "market": "上市", "description": "散裝航運", "keyMetric": "" },
            { "id": "2607", "name": "榮運", "market": "上市", "description": "散裝航運", "keyMetric": "" },
            { "id": "2609", "name": "陽明", "market": "上市", "description": "貨櫃海運", "keyMetric": "" },
            { "id": "2610", "name": "華航", "market": "上市", "description": "客運航空", "keyMetric": "台灣最大航空公司" },
            { "id": "2615", "name": "萬海", "market": "上市", "description": "貨櫃海運", "keyMetric": "" },
            { "id": "2618", "name": "長榮航", "market": "上市", "description": "客運航空", "keyMetric": "台灣第二大航空公司" },
            { "id": "2637", "name": "慧洋-KY", "market": "上市", "description": "散裝航運", "keyMetric": "" },
            { "id": "2645", "name": "長榮航太", "market": "上市", "description": "飛機維修", "keyMetric": "" },
            { "id": "2646", "name": "星宇航空", "market": "上市", "description": "客運航空", "keyMetric": "" }
        ]
    },

    // ========== 16 - 觀光事業 ==========
    "16": {
        "industryCode": "16",
        "industryName": "觀光事業",
        "companies": [
            { "id": "2633", "name": "台灣高鐵", "market": "上市", "description": "高速鐵路運輸", "keyMetric": "台灣唯一高鐵營運商" }
        ]
    },

    // ========== 17 - 金融保險業 ==========
    "17": {
        "industryCode": "17",
        "industryName": "金融保險業",
        "companies": [
            { "id": "2801", "name": "彰銀", "market": "上市", "description": "商業銀行", "keyMetric": "" },
            { "id": "2809", "name": "京城銀", "market": "上市", "description": "商業銀行", "keyMetric": "" },
            { "id": "2812", "name": "台中銀", "market": "上市", "description": "商業銀行", "keyMetric": "" },
            { "id": "2820", "name": "華票", "market": "上市", "description": "票券金融", "keyMetric": "" },
            { "id": "2823", "name": "中壽", "market": "上市", "description": "人壽保險", "keyMetric": "" },
            { "id": "2834", "name": "臺企銀", "market": "上市", "description": "商業銀行", "keyMetric": "" },
            { "id": "2845", "name": "遠東銀", "market": "上市", "description": "商業銀行", "keyMetric": "" },
            { "id": "2867", "name": "三商壽", "market": "上市", "description": "人壽保險", "keyMetric": "" },
            { "id": "2880", "name": "華南金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2881", "name": "富邦金", "market": "上市", "description": "金融控股（銀行、保險、證券）", "keyMetric": "台灣第二大金控" },
            { "id": "2882", "name": "國泰金", "market": "上市", "description": "金融控股（銀行、保險、證券）", "keyMetric": "壽險市佔第一（約 25%）" },
            { "id": "2883", "name": "開發金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2884", "name": "玉山金", "market": "上市", "description": "金融控股（信用卡業務強）", "keyMetric": "" },
            { "id": "2885", "name": "元大金", "market": "上市", "description": "金融控股（證券業龍頭）", "keyMetric": "台灣最大證券商" },
            { "id": "2886", "name": "兆豐金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2887", "name": "台新金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2888", "name": "新光金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2889", "name": "國票金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2890", "name": "永豐金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2891", "name": "中信金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "2892", "name": "第一金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "5871", "name": "中租-KY", "market": "上市", "description": "租賃融資服務", "keyMetric": "" },
            { "id": "5880", "name": "合庫金", "market": "上市", "description": "金融控股", "keyMetric": "" },
            { "id": "6005", "name": "群益證", "market": "上市", "description": "證券經紀", "keyMetric": "" }
        ]
    },

    // ========== 18 - 貿易百貨 ==========
    "18": {
        "industryCode": "18",
        "industryName": "貿易百貨",
        "companies": [
            { "id": "2614", "name": "東森", "market": "上市", "description": "電視購物", "keyMetric": "" },
            { "id": "2903", "name": "遠百", "market": "上市", "description": "百貨零售", "keyMetric": "" },
            { "id": "2912", "name": "統一超", "market": "上市", "description": "便利商店（7-ELEVEN）", "keyMetric": "台灣最大連鎖超商" },
            { "id": "2915", "name": "潤泰全", "market": "上市", "description": "百貨零售、建設", "keyMetric": "" },
            { "id": "8454", "name": "富邦媒", "market": "上市", "description": "電商平台（momo）", "keyMetric": "台灣最大電商" }
        ]
    },

    // ========== 19 - (未使用) ==========
    "19": {
        "industryCode": "19",
        "industryName": "其他",
        "companies": []
    },

    // ========== 20 - 其他 ==========
    "20": {
        "industryCode": "20",
        "industryName": "其他",
        "companies": [
            { "id": "2404", "name": "漢唐", "market": "上市", "description": "半導體廠務工程統包", "keyMetric": "" },
            { "id": "9904", "name": "寶成", "market": "上市", "description": "運動鞋代工", "keyMetric": "全球最大製鞋廠" },
            { "id": "9921", "name": "巨大", "market": "上市", "description": "自行車製造（GIANT）", "keyMetric": "全球最大自行車品牌商" }
        ]
    },

    // ========== 21 - 化學工業 ==========
    "21": {
        "industryCode": "21",
        "industryName": "化學工業",
        "companies": [
            { "id": "1722", "name": "台肥", "market": "上市", "description": "肥料製造", "keyMetric": "台灣最大肥料廠" },
            { "id": "1723", "name": "中碳", "market": "上市", "description": "碳黑、白碳黑", "keyMetric": "" },
            { "id": "1773", "name": "勝一", "market": "上市", "description": "化學原料", "keyMetric": "" }
        ]
    },

    // ========== 22 - 生技醫療業 ==========
    "22": {
        "industryCode": "22",
        "industryName": "生技醫療業",
        "companies": [
            { "id": "1795", "name": "美時", "market": "上市", "description": "學名藥製造", "keyMetric": "" },
            { "id": "6446", "name": "藥華藥", "market": "上市", "description": "長效型干擾素藥物開發", "keyMetric": "" },
            { "id": "6472", "name": "保瑞", "market": "上市", "description": "學名藥製造", "keyMetric": "" }
        ]
    },

    // ========== 23 - 油電燃氣業 ==========
    "23": {
        "industryCode": "23",
        "industryName": "油電燃氣業",
        "companies": [
            { "id": "6505", "name": "台塑化", "market": "上市", "description": "油品、石化原料", "keyMetric": "台塑四寶之一" },
            { "id": "6806", "name": "森崴能源", "market": "上市", "description": "再生能源開發、工程", "keyMetric": "正崴集團綠能子公司" },
            { "id": "8926", "name": "台汽電", "market": "上市", "description": "汽電共生、獨立發電廠", "keyMetric": "台電轉投資" },
            { "id": "9918", "name": "欣天然", "market": "上市", "description": "天然氣供應", "keyMetric": "大台北地區瓦斯公司" },
            { "id": "9937", "name": "全國", "market": "上市", "description": "加油站通路", "keyMetric": "知名連鎖加油站" }
        ]
    },

    // ========== 24 - 半導體業 ==========
    "24": {
        "industryCode": "24",
        "industryName": "半導體業",
        "companies": [
            { "id": "2303", "name": "聯電", "market": "上市", "description": "晶圓代工", "keyMetric": "全球第三大晶圓代工廠" },
            { "id": "2330", "name": "台積電", "market": "上市", "description": "先進製程晶圓代工為主，成熟製程為輔", "keyMetric": "先進製程全球市佔 90%+" },
            { "id": "2337", "name": "旺宏", "market": "上市", "description": "NOR Flash 記憶體晶片", "keyMetric": "" },
            { "id": "2344", "name": "華邦電", "market": "上市", "description": "利基型 DRAM、NOR Flash", "keyMetric": "" },
            { "id": "2379", "name": "瑞昱", "market": "上市", "description": "網路晶片、音效晶片設計", "keyMetric": "" },
            { "id": "2408", "name": "南亞科", "market": "上市", "description": "DRAM 記憶體晶片製造", "keyMetric": "台灣第二大 DRAM 廠" },
            { "id": "2449", "name": "京元電子", "market": "上市", "description": "晶圓測試", "keyMetric": "" },
            { "id": "2454", "name": "聯發科", "market": "上市", "description": "手機晶片、Wi-Fi 晶片設計", "keyMetric": "全球前三大 IC 設計公司" },
            { "id": "2458", "name": "義隆", "market": "上市", "description": "觸控 IC、指紋辨識 IC", "keyMetric": "" },
            { "id": "3006", "name": "晶豪科", "market": "上市", "description": "類比 IC 設計", "keyMetric": "" },
            { "id": "3016", "name": "嘉晶", "market": "上市", "description": "矽晶圓", "keyMetric": "" },
            { "id": "3034", "name": "聯詠", "market": "上市", "description": "顯示驅動 IC、電源管理 IC", "keyMetric": "" },
            { "id": "3035", "name": "智原", "market": "上市", "description": "ASIC 設計服務", "keyMetric": "" },
            { "id": "3051", "name": "力特", "market": "上市", "description": "功率半導體", "keyMetric": "" },
            { "id": "3094", "name": "聯傑", "market": "上市", "description": "IC 設計", "keyMetric": "" },
            { "id": "3443", "name": "創意", "market": "上市", "description": "特殊應用晶片設計服務（ASIC）", "keyMetric": "台積電 ASIC 設計夥伴" },
            { "id": "3533", "name": "嘉澤", "market": "上市", "description": "晶圓再生", "keyMetric": "" },
            { "id": "3711", "name": "日月光投控", "market": "上市", "description": "半導體封裝測試", "keyMetric": "全球最大封測廠" },
            { "id": "4583", "name": "台灣精銳", "market": "上市", "description": "半導體設備", "keyMetric": "" },
            { "id": "4763", "name": "材料-KY", "market": "上市", "description": "半導體材料", "keyMetric": "" },
            { "id": "5269", "name": "祥碩", "market": "上市", "description": "USB 控制 IC、PCIe 晶片設計", "keyMetric": "" },
            { "id": "6239", "name": "力成", "market": "上市", "description": "半導體封裝測試", "keyMetric": "全球第三大封測廠" },
            { "id": "6409", "name": "旭隼", "market": "上市", "description": "半導體測試介面", "keyMetric": "" },
            { "id": "6415", "name": "矽力-KY", "market": "上市", "description": "電源管理 IC 設計", "keyMetric": "" },
            { "id": "6442", "name": "光聖", "market": "上市", "description": "半導體設備零組件", "keyMetric": "" },
            { "id": "6526", "name": "達發", "market": "上市", "description": "光通訊晶片", "keyMetric": "" },
            { "id": "6531", "name": "愛普", "market": "上市", "description": "記憶體模組", "keyMetric": "" },
            { "id": "6770", "name": "力積電", "market": "上市", "description": "晶圓代工、DRAM", "keyMetric": "" },
            { "id": "6781", "name": "AES-KY", "market": "上市", "description": "先進封裝", "keyMetric": "" },
            { "id": "6789", "name": "采鈺", "market": "上市", "description": "影像感測器晶片", "keyMetric": "台積電轉投資" },
            { "id": "6805", "name": "富世達", "market": "上市", "description": "半導體設備", "keyMetric": "" }
        ]
    },

    // ========== 25 - 電腦及周邊設備業 ==========
    "25": {
        "industryCode": "25",
        "industryName": "電腦及周邊設備業",
        "companies": [
            { "id": "2312", "name": "金寶", "market": "上市", "description": "顯示器、印表機代工", "keyMetric": "" },
            { "id": "2324", "name": "仁寶", "market": "上市", "description": "筆記型電腦代工", "keyMetric": "" },
            { "id": "2352", "name": "佳世達", "market": "上市", "description": "顯示器、醫療設備", "keyMetric": "" },
            { "id": "2353", "name": "宏碁", "market": "上市", "description": "筆記型電腦品牌", "keyMetric": "" },
            { "id": "2354", "name": "鴻準", "market": "上市", "description": "金屬機殼、模具", "keyMetric": "鴻海集團子公司" },
            { "id": "2356", "name": "英業達", "market": "上市", "description": "筆記型電腦、伺服器代工", "keyMetric": "" },
            { "id": "2357", "name": "華碩", "market": "上市", "description": "筆電、主機板、顯示卡品牌", "keyMetric": "全球主機板市佔第一" },
            { "id": "2376", "name": "技嘉", "market": "上市", "description": "主機板、顯示卡", "keyMetric": "全球主機板前三大" },
            { "id": "2377", "name": "微星", "market": "上市", "description": "主機板、顯示卡製造", "keyMetric": "" },
            { "id": "2382", "name": "廣達", "market": "上市", "description": "筆記型電腦代工", "keyMetric": "全球筆電代工前三" },
            { "id": "2474", "name": "可成", "market": "上市", "description": "筆電與手機金屬機殼", "keyMetric": "" },
            { "id": "3005", "name": "神基", "market": "上市", "description": "強固型電腦", "keyMetric": "全球強固型電腦龍頭" },
            { "id": "3231", "name": "緯創", "market": "上市", "description": "筆記型電腦、伺服器代工", "keyMetric": "" },
            { "id": "3706", "name": "神達", "market": "上市", "description": "GPS、車用電子", "keyMetric": "" },
            { "id": "4938", "name": "和碩", "market": "上市", "description": "電子產品代工", "keyMetric": "iPhone 代工廠之一" },
            { "id": "6669", "name": "緯穎", "market": "上市", "description": "伺服器代工", "keyMetric": "" }
        ]
    },

    // ========== 26 - 光電業 ==========
    "26": {
        "industryCode": "26",
        "industryName": "光電業",
        "companies": [
            { "id": "2301", "name": "光寶科", "market": "上市", "description": "LED 元件、光電零組件製造", "keyMetric": "" },
            { "id": "2308", "name": "台達電", "market": "上市", "description": "電源供應器、工業自動化", "keyMetric": "全球電源供應器龍頭" },
            { "id": "2393", "name": "億光", "market": "上市", "description": "LED 元件", "keyMetric": "" },
            { "id": "2409", "name": "友達", "market": "上市", "description": "面板製造", "keyMetric": "" },
            { "id": "3008", "name": "大立光", "market": "上市", "description": "手機鏡頭模組", "keyMetric": "高階手機鏡頭全球龍頭" },
            { "id": "3406", "name": "玉晶光", "market": "上市", "description": "手機鏡頭", "keyMetric": "" },
            { "id": "3481", "name": "群創", "market": "上市", "description": "面板製造", "keyMetric": "" },
            { "id": "6116", "name": "彩晶", "market": "上市", "description": "中小尺寸面板", "keyMetric": "" },
            { "id": "6176", "name": "瑞儀", "market": "上市", "description": "背光模組", "keyMetric": "全球最大背光模組廠" }
        ]
    },

    // ========== 27 - 通信網路業 ==========
    "27": {
        "industryCode": "27",
        "industryName": "通信網路業",
        "companies": [
            { "id": "2345", "name": "智邦", "market": "上市", "description": "網路交換器、伺服器製造", "keyMetric": "" },
            { "id": "2412", "name": "中華電", "market": "上市", "description": "固網、行動通訊、寬頻服務", "keyMetric": "台灣最大電信商" },
            { "id": "3045", "name": "台灣大", "market": "上市", "description": "行動通訊、有線電視、寬頻", "keyMetric": "台灣第二大電信商" },
            { "id": "3047", "name": "訊舟", "market": "上市", "description": "網路設備", "keyMetric": "" },
            { "id": "4904", "name": "遠傳", "market": "上市", "description": "行動通訊、寬頻服務", "keyMetric": "台灣第三大電信商" },
            { "id": "6285", "name": "啟碁", "market": "上市", "description": "無線網路設備", "keyMetric": "" }
        ]
    },

    // ========== 28 - 電子零組件業 ==========
    "28": {
        "industryCode": "28",
        "industryName": "電子零組件業",
        "companies": [
            { "id": "1560", "name": "中砂", "market": "上市", "description": "研磨材料、砂輪", "keyMetric": "" },
            { "id": "2231", "name": "為升", "market": "上市", "description": "散熱模組", "keyMetric": "" },
            { "id": "2313", "name": "華通", "market": "上市", "description": "印刷電路板（PCB）", "keyMetric": "" },
            { "id": "2327", "name": "國巨", "market": "上市", "description": "被動元件（MLCC、電阻）製造", "keyMetric": "全球第三大 MLCC 廠" },
            { "id": "2359", "name": "所羅門", "market": "上市", "description": "光學元件", "keyMetric": "" },
            { "id": "2360", "name": "致茂", "market": "上市", "description": "電源測試設備", "keyMetric": "" },
            { "id": "2368", "name": "金像電", "market": "上市", "description": "被動元件", "keyMetric": "" },
            { "id": "2385", "name": "群光", "market": "上市", "description": "鍵盤、滑鼠、電源供應器", "keyMetric": "" },
            { "id": "2395", "name": "研華", "market": "上市", "description": "工業電腦、物聯網解決方案", "keyMetric": "" },
            { "id": "2428", "name": "興勤", "market": "上市", "description": "NTC 熱敏電阻", "keyMetric": "" },
            { "id": "2478", "name": "大毅", "market": "上市", "description": "電感元件", "keyMetric": "" },
            { "id": "2492", "name": "華新科", "market": "上市", "description": "被動元件（MLCC）", "keyMetric": "" },
            { "id": "3017", "name": "奇鋐", "market": "上市", "description": "連接器製造", "keyMetric": "" },
            { "id": "3023", "name": "信邦", "market": "上市", "description": "連接器、線材", "keyMetric": "" },
            { "id": "3037", "name": "欣興", "market": "上市", "description": "IC 載板、印刷電路板（PCB）", "keyMetric": "" },
            { "id": "3044", "name": "健鼎", "market": "上市", "description": "印刷電路板（PCB）", "keyMetric": "" },
            { "id": "3189", "name": "景碩", "market": "上市", "description": "IC 載板", "keyMetric": "" },
            { "id": "3665", "name": "貿聯-KY", "market": "上市", "description": "連接線組", "keyMetric": "" },
            { "id": "4958", "name": "臻鼎-KY", "market": "上市", "description": "軟板（FPC）", "keyMetric": "全球最大軟板廠" },
            { "id": "6890", "name": "來億-KY", "market": "上市", "description": "連接器", "keyMetric": "" },
            { "id": "8046", "name": "南電", "market": "上市", "description": "IC 載板", "keyMetric": "" }
        ]
    },

    // ========== 29 - 電子通路業 ==========
    "29": {
        "industryCode": "29",
        "industryName": "電子通路業",
        "companies": [
            { "id": "2347", "name": "聯強", "market": "上市", "description": "3C 通路商", "keyMetric": "亞太區最大 3C 通路" },
            { "id": "3036", "name": "文曄", "market": "上市", "description": "IC 通路商", "keyMetric": "" },
            { "id": "3702", "name": "大聯大", "market": "上市", "description": "IC 通路商", "keyMetric": "亞太區最大 IC 通路" }
        ]
    },

    // ========== 30 - 資訊服務業 ==========
    "30": {
        "industryCode": "30",
        "industryName": "資訊服務業",
        "companies": [
            { "id": "2471", "name": "資通", "market": "上市", "description": "銀行系統、ERP 整合", "keyMetric": "" },
            { "id": "3029", "name": "零壹", "market": "上市", "description": "資訊安全與網路設備代理", "keyMetric": "資安軟體代理龍頭" },
            { "id": "4953", "name": "緯軟", "market": "上市", "description": "軟體外包服務", "keyMetric": "緯創集團子公司" },
            { "id": "5203", "name": "訊連", "market": "上市", "description": "多媒體影音軟體、AI 人臉辨識", "keyMetric": "轉型 AI 臉部辨識" },
            { "id": "6214", "name": "精誠", "market": "上市", "description": "資訊服務與系統整合", "keyMetric": "台灣最大資訊服務商" }
        ]
    },

    // ========== 31 - 其他電子業 ==========
    "31": {
        "industryCode": "31",
        "industryName": "其他電子業",
        "companies": [
            { "id": "2317", "name": "鴻海", "market": "上市", "description": "電子產品組裝代工", "keyMetric": "全球最大電子代工廠" },
            { "id": "2371", "name": "大同", "market": "上市", "description": "家電、系統整合", "keyMetric": "" },
            { "id": "9910", "name": "豐泰", "market": "上市", "description": "運動鞋代工", "keyMetric": "Nike 最大代工廠之一" }
        ]
    }
};

// ============================================================================
// 輔助函數
// ============================================================================

// 取得所有公司（扁平化陣列，與舊版相容）
window.getAllStocks = function () {
    return Object.values(window.STOCKS_DATA_BY_INDUSTRY)
        .flatMap(industry => industry.companies.map(company => ({
            ...company,
            industry: industry.industryName,
            industryCode: industry.industryCode
        })));
};

// 取得指定產業的公司
window.getStocksByIndustry = function (industryCode) {
    const industry = window.STOCKS_DATA_BY_INDUSTRY[industryCode];
    return industry ? industry.companies : [];
};

// 取得多個產業的公司
window.getStocksByIndustries = function (industryCodes) {
    return industryCodes
        .filter(code => window.STOCKS_DATA_BY_INDUSTRY[code])
        .flatMap(code => window.STOCKS_DATA_BY_INDUSTRY[code].companies.map(company => ({
            ...company,
            industry: window.STOCKS_DATA_BY_INDUSTRY[code].industryName,
            industryCode: code
        })));
};

// 取得產業統計
window.getIndustryStats = function () {
    const stats = {};
    let totalCompanies = 0;

    Object.entries(window.STOCKS_DATA_BY_INDUSTRY).forEach(([code, industry]) => {
        const count = industry.companies.length;
        stats[code] = {
            industryCode: code,
            industryName: industry.industryName,
            companyCount: count
        };
        totalCompanies += count;
    });

    return {
        byIndustry: stats,
        totalCompanies: totalCompanies,
        totalIndustries: Object.keys(stats).length
    };
};

console.log(`✓ 台股資料載入完成（按產業分類）`);
const stats = window.getIndustryStats();
console.log(`  共 ${stats.totalCompanies} 家公司，分布於 ${stats.totalIndustries} 個產業`);
