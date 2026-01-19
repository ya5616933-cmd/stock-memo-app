/**
 * 台股資料抓取腳本 (Node.js)
 * 從 TWSE (上市) 和 TPEX (上櫃) 抓取所有公司基本資料
 */

const https = require('https');
const fs = require('fs');

// 抓取 TWSE 上市資料
async function fetchTWSEStocks() {
    console.log('正在抓取上市公司資料...');

    return new Promise((resolve, reject) => {
        const url = 'https://mopsfin.twse.com.tw/opendata/t187ap03_L.csv';

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    // 解析 CSV
                    const lines = data.split('\n');
                    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());

                    const stocks = [];
                    for (let i = 1; i < lines.length; i++) {
                        if (!lines[i].trim()) continue;

                        // 簡化處理：處理引號包裹的欄位
                        const matches = lines[i].match(/("([^"]*)"|[^,]+)/g);
                        if (!matches || matches.length < 3) continue;

                        const values = matches.map(v => v.replace(/^"|"$/g, '').trim());

                        // 找到關鍵欄位的索引
                        const idIndex = headers.indexOf('公司代號');
                        const nameIndex = headers.indexOf('公司名稱');
                        const shortNameIndex = headers.indexOf('公司簡稱');
                        const industryIndex = headers.indexOf('產業別');

                        if (idIndex >= 0 && values[idIndex]) {
                            stocks.push({
                                id: values[idIndex],
                                name: values[nameIndex] || values[idIndex],
                                shortName: values[shortNameIndex] || values[nameIndex] || values[idIndex],
                                industry: values[industryIndex] || '上市',
                                market: '上市',
                                description: '',
                                keyMetric: ''
                            });
                        }
                    }

                    console.log(`✓ 成功抓取 ${stocks.length} 家上市公司`);
                    resolve(stocks);
                } catch (err) {
                    console.error('✗ 解析上市資料失敗:', err.message);
                    resolve([]);
                }
            });
        }).on('error', (err) => {
            console.error('✗ 抓取上市公司失敗:', err.message);
            resolve([]);
        });
    });
}

// 抓取 TPEX 上櫃資料
async function fetchTPEXStocks() {
    console.log('正在抓取上櫃公司資料...');

    return new Promise((resolve) => {
        const url = 'https://www.tpex.org.tw/openapi/v1/tpex_mainboard_securities';

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const stocks = [];

                    for (const item of json) {
                        const id = item.SecuritiesCompanyCode || item.Code;
                        const name = item.CompanyName || item.Name;

                        if (id && id.trim()) {
                            stocks.push({
                                id: id.trim(),
                                name: name ? name.trim() : id,
                                shortName: name ? name.trim() : id,
                                industry: '上櫃',
                                market: '上櫃',
                                description: '',
                                keyMetric: ''
                            });
                        }
                    }

                    console.log(`✓ 成功抓取 ${stocks.length} 家上櫃公司`);
                    resolve(stocks);
                } catch (err) {
                    console.error('✗ 解析上櫃資料失敗:', err.message);
                    resolve([]);
                }
            });
        }).on('error', (err) => {
            console.error('✗ 抓取上櫃公司失敗:', err.message);
            resolve([]);
        });
    });
}

// 主函數
async function main() {
    console.log('='.repeat(50));
    console.log('台股資料抓取工具 (Node.js)');
    console.log('='.repeat(50));

    // 抓取資料
    const twse = await fetchTWSEStocks();
    const tpex = await fetchTPEXStocks();

    // 合併
    const allStocks = [...twse, ...tpex];

    // 排序
    allStocks.sort((a, b) => a.id.localeCompare(b.id));

    console.log(`\n總共 ${allStocks.length} 家公司`);
    console.log('儲存至 stocks_raw.json...');

    // 儲存
    fs.writeFileSync(
        'stocks_raw.json',
        JSON.stringify(allStocks, null, 2),
        'utf-8'
    );

    console.log(`✓ 完成！共 ${allStocks.length} 筆資料`);

    // 顯示前 5 筆作為範例
    console.log('\n前 5 筆資料範例:');
    console.log(JSON.stringify(allStocks.slice(0, 5), null, 2));
}

main().catch(console.error);
