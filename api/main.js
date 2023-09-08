import { slgescApi } from '~/service';

export function getWeatherReport() {
    return slgescApi.get('WeatherReport');
}

export function getRealtimeStatus() {
    return slgescApi.get('RealtimeStatus');
}

export function getRealtimeStatus() {
    return slgescApi.get('HistoryTrend/RdCenter:ITRI:exhibition/generating/Min/1693838694636/1694097894638');
}