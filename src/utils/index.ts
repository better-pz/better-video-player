// 计算百分比*总时间（元数据）
export function percentToSeconds(percent: number, time_seconds: number) {
  const currentTime = percent * time_seconds;
  return currentTime;
}