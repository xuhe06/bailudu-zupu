// 中元放灯登记
// 灯号：年份-放灯日期(农历月日)-当晚序号，例 2026-0714-03
function lampNo(year, lunarMD, seq) {
  return year + '-' + lunarMD + '-' + String(seq).padStart(2, '0');
}

// 灯签号由后台生成，短信发给登记人，也印在灯签上

// 撤灯：只撤还没放的灯。已经放下水的灯，网上撤不了
function canWithdraw(tagNo) {
  const rec = findLamp(tagNo);
  return rec && !rec.released;
}

// TODO: 灯主须为过世亲人，登记时加个确认
