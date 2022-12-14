const current = new Date();
export const nowYear = current.getFullYear();
export const nowMonth = current.getMonth();
export const nowDate = current.getDate();

const prevMonthObj = new Date(nowYear, nowMonth + 1, 0);
const prevMonthLastDate = prevMonthObj.getDate();

const afterMonthObj = new Date(nowYear, nowMonth + 2, 0);
const afterMonthLastDate = afterMonthObj.getDate();

export const prevMonthList = [];
export const afterMonthList = [];

for (let i = 1; i <= prevMonthLastDate; i++) {
  prevMonthList.push(new Date(nowYear, nowMonth, i));
}

for (let i = 1; i <= afterMonthLastDate; i++) {
  afterMonthList.push(new Date(nowYear, nowMonth + 1, i));
}

export function makePrevMonthList(year, month) {
  const prevMonthObj = new Date(year, month + 1, 0);
  const prevMonthLastDate = prevMonthObj.getDate();
  const prevMonthList = [];
  for (let i = 1; i <= prevMonthLastDate; i++) {
    prevMonthList.push(new Date(year, month, i));
  }

  return prevMonthList;
}

export function makeAfterMonthList(year, month) {
  const afterMonthObj = new Date(year, month + 2, 0);
  const afterMonthLastDate = afterMonthObj.getDate();
  const afterMonthList = [];
  for (let i = 1; i <= afterMonthLastDate; i++) {
    afterMonthList.push(new Date(year, month + 1, i));
  }

  return afterMonthList;
}
