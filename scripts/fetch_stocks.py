"""
台股資料抓取腳本
從 TWSE (上市) 和 TPEX (上櫃) 抓取所有公司基本資料
"""
import requests
import csv
import json
from io import StringIO

def fetch_twse_stocks():
    """抓取上市公司清單"""
    print("正在抓取上市公司資料...")
    url = "https://mopsfin.twse.com.tw/opendata/t187ap03_L.csv"
    
    try:
        response = requests.get(url, timeout=30)
        response.encoding = 'utf-8'
        
        # 解析 CSV
        csv_data = StringIO(response.text)
        reader = csv.DictReader(csv_data)
        
        stocks = []
        for row in reader:
            stock = {
                'id': row['公司代號'].strip(),
                'name': row['公司名稱'].strip(),
                'shortName': row['公司簡稱'].strip(),
                'industry': row['產業別'].strip(),
                'market': '上市',
                'description': '',  # 待補充
                'keyMetric': ''     # 待補充
            }
            stocks.append(stock)
        
        print(f"✓ 成功抓取 {len(stocks)} 家上市公司")
        return stocks
    
    except Exception as e:
        print(f"✗ 抓取上市公司失敗: {e}")
        return []

def fetch_tpex_stocks():
    """抓取上櫃公司清單"""
    print("正在抓取上櫃公司資料...")
    # TPEX 使用類似的 API
    url = "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_close_quotes"
    
    try:
        response = requests.get(url, timeout=30)
        data = response.json()
        
        stocks = []
        seen_ids = set()
        
        # 從當日行情中提取上櫃股票代號
        for item in data:
            stock_id = item.get('SecuritiesCompanyCode', '').strip()
            stock_name = item.get('CompanyName', '').strip()
            
            if stock_id and stock_id not in seen_ids:
                seen_ids.add(stock_id)
                stock = {
                    'id': stock_id,
                    'name': stock_name,
                    'shortName': stock_name,  # 上櫃資料較少，使用全名
                    'industry': '上櫃',  # 簡化處理
                    'market': '上櫃',
                    'description': '',
                    'keyMetric': ''
                }
                stocks.append(stock)
        
        print(f"✓ 成功抓取 {len(stocks)} 家上櫃公司")
        return stocks
    
    except Exception as e:
        print(f"✗ 抓取上櫃公司失敗: {e}")
        print("  將使用備用 CSV 來源...")
        # 備用方案：使用 CSV
        return fetch_tpex_from_csv()

def fetch_tpex_from_csv():
    """備用：從 CSV 抓取上櫃資料"""
    try:
        url = "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_securities"
        response = requests.get(url, timeout=30)
        data = response.json()
        
        stocks = []
        for item in data:
            stock = {
                'id': item.get('SecuritiesCompanyCode', '').strip(),
                'name': item.get('CompanyName', '').strip(),
                'shortName': item.get('CompanyName', '').strip(),
                'industry': '上櫃',
                'market': '上櫃',
                'description': '',
                'keyMetric': ''
            }
            if stock['id']:
                stocks.append(stock)
        
        return stocks
    except:
        return []

def merge_and_save(twse_stocks, tpex_stocks, output_file='stocks_raw.json'):
    """合併資料並儲存"""
    all_stocks = twse_stocks + tpex_stocks
    
    # 按代號排序
    all_stocks.sort(key=lambda x: x['id'])
    
    print(f"\n總共 {len(all_stocks)} 家公司")
    print(f"儲存至 {output_file}...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_stocks, f, ensure_ascii=False, indent=2)
    
    print(f"✓ 資料已儲存")
    return all_stocks

if __name__ == '__main__':
    print("=" * 50)
    print("台股資料抓取工具")
    print("=" * 50)
    
    # 抓取資料
    twse = fetch_twse_stocks()
    tpex = fetch_tpex_stocks()
    
    # 合併並儲存
    if twse or tpex:
        all_stocks = merge_and_save(twse, tpex)
        print(f"\n✓ 完成！共 {len(all_stocks)} 筆資料")
    else:
        print("\n✗ 無法抓取任何資料")
