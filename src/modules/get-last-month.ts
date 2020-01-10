export default function getLastMonth() {
  const date: Date = new Date();
  const lastMonth: Date = new Date(date.setMonth(date.getMonth() - 1));
  return Utilities.formatDate(lastMonth, 'Asia/Tokyo', 'yyyyMM');
}
