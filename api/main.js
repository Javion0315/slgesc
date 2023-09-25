import { slgescApi } from '~/service';

// 天氣預報
export function getWeatherReport() {
  return slgescApi.get('WeatherReport');
}

// 即時狀況
export function getRealtimeStatus() {
  return slgescApi.get('RealtimeStatus');
}

// 歷史趨勢圖
export function getHistoryTrend(monitor, monitorType, tableType, start, end) {
  // 多個測項, 中間以 : 分隔
  // monitor 測站參數 (RdCenter: 資安暨智慧科技研發專區, ITRI: 綠能科技示範場域, Exhibition: 會展中心, K: K區, E: E區, SL:日照強度)
  // monitorType (generating: 發電量, storing: 儲能量, consuming: 用電量, consumingPercent: 契約容量占比, greenPercent: 綠能滲透率)
  // tableType 資料表格類別有 Hour 和 Min 兩種
  // start, end 開始和結束時間, 以 Epoch 開始的 ms 表示時間
  return slgescApi.get(`HistoryTrend/${monitor}/${monitorType}/${tableType}/${start}/${end}`);
}

// 本月及上月發電/用電量比較
export function getConsumptionCompare() {
  return slgescApi.get('ConsumptionCompare');
}

// 取得各區月發電/用電最大最小值
export function getPowerMonthSummary(year, month) {
  return slgescApi.get(`PowerMonthSummary/${year}/${month}`);
}

// 年度各區發電,用電報告
export function getPowerYearSummary(year) {
  return slgescApi.get(`PowerYearSummary/${year}`);
}
