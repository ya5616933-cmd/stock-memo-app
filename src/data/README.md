# 台股資料庫 (Stock Data)

這裡存放台股記憶閃卡應用程式的核心資料。

## � 核心檔案

| 檔名 | 用途 |
|------|------|
| **`stocks_data_by_industry.js`** | **主要資料庫**。包含按 31 個產業分類的所有公司資料。 |
| **`industry_code_mapping.js`** | **輔助工具**。負責產業代碼 (例如 "24") 與中文名稱 (例如 "半導體業") 之間的轉換。 |

## �️ 封存區 (_legacy)

舊版的資料檔案（如 JSON 原始檔、舊格式 JS 檔）已移至 `_legacy` 資料夾中備份。

## � 如何新增資料

請直接編輯 `stocks_data_by_industry.js`：

1. 找到對應的產業代碼區塊（例如 "24" 為半導體業）。
2. 在 `companies` 陣列中新增公司物件：

```javascript
{
    "id": "2330",
    "name": "台積電",
    "market": "上市",
    "description": "...",
    "keyMetric": "..."
}
```

詳細指南請參考專案根目錄的文件。
