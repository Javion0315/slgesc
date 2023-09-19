import { slgescApi } from '~/service';

export function getWeatherReport() {
  return slgescApi.get('WeatherReport');
}

export function getRealtimeStatus() {
  return slgescApi.get('RealtimeStatus');
}

export function getHistoryTrend(monitor, monitorType, tableType, start, end) {
  // 多個測項, 中間以 : 分隔
  // monitor 測站參數 (RdCenter: 資安暨智慧科技研發專區, ITRI: 綠能科技示範場域, Exhibition: 會展中心, K: K區, E: E區, SL:日照強度)
  // monitorType (generating: 發電量, storing: 儲能量, consuming: 用電量, consumingPercent: 契約容量占比, greenPercent: 綠能滲透率)
  // tableType 資料表格類別有 Hour 和 Min 兩種
  // start, end 開始和結束時間, 以 Epoch 開始的 ms 表示時間
  return slgescApi.get(`HistoryTrend/${monitor}/${monitorType}/${tableType}/${start}/${end}`);
}

export function getConsumptionCompare() {
  return slgescApi.get('ConsumptionCompare');
}
