import {
  prevMonthList,
  afterMonthList,
  nowYear,
  nowMonth,
} from './calendar.js';
import '../css/style.css';
// '언제든 일주일' 클릭 시 달력
const $searchWhenBtn = document.querySelector('.search-form__when');

const $prevFirstRow = document.querySelector('.prev-first-row');
const $prevSecondRow = document.querySelector('.prev-second-row');
const $prevThirdRow = document.querySelector('.prev-third-row');
const $prevFourthRow = document.querySelector('.prev-fourth-row');
const $prevFifthRow = document.querySelector('.prev-fifth-row');
const $prevSixthRow = document.querySelector('.prev-sixth-row');

const $afterFirstRow = document.querySelector('.after-first-row');
const $afterSecondRow = document.querySelector('.after-second-row');
const $afterThirdRow = document.querySelector('.after-third-row');
const $afterFourthRow = document.querySelector('.after-fourth-row');
const $afterFifthRow = document.querySelector('.after-fifth-row');
const $afterSixthRow = document.querySelector('.after-sixth-row');

const $calendar = document.querySelector('.calendar-hidden');
const $modalBackground = document.querySelector('.modal-background');

$searchWhenBtn.addEventListener('click', () => {
  if ($prevFirstRow.innerHTML !== '') {
    return;
  }
  makePrevCalendar(prevMonthList);
});

function makePrevCalendar(monthList) {
  // 달력 시작부분 빈값 채우기
  for (let i = 0; i < monthList[0].getDay(); i++) {
    $prevFirstRow.innerHTML += `<td></td>`;
  }
  let weekCount = 0;
  for (let date of monthList) {
    switch (weekCount) {
      case 0:
        $prevFirstRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 1:
        $prevSecondRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 2:
        $prevThirdRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 3:
        $prevFourthRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 4:
        $prevFifthRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 5:
        $prevSixthRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
    }
    if (date.getDay() === 6) {
      weekCount++;
    }
  }
}

$searchWhenBtn.addEventListener('click', () => {
  if ($afterFirstRow.innerHTML !== '') {
    return;
  }
  makeAfterCalendar(afterMonthList);
});

function makeAfterCalendar(monthList) {
  // 달력 시작부분 빈값 채우기
  for (let i = 0; i < monthList[0].getDay(); i++) {
    $afterFirstRow.innerHTML += `<td></td>`;
  }
  let weekCount = 0;
  for (let date of monthList) {
    switch (weekCount) {
      case 0:
        $afterFirstRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 1:
        $afterSecondRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 2:
        $afterThirdRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 3:
        $afterFourthRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 4:
        $afterFifthRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
      case 5:
        $afterSixthRow.innerHTML += `<td class="table__number">${date.getDate()}</td>`;
        break;
    }
    if (date.getDay() === 6) {
      weekCount++;
    }
  }
}

const $prevMonthSection = document.querySelector('.calendar__prev-month');
const $afterMonthSection = document.querySelector('.calendar__after-month');

// 캘린더 모달 창 바깥 클릭 시 닫히게
$searchWhenBtn.addEventListener('click', () => {
  $calendar.classList.add('calendar');
  document.body.style.backgroundColor = 'rgba(128, 128, 128, 0.3)';
  $modalBackground.style.zIndex = 1;

  // 전 달력 타이틀 연 월 추가
  if (
    document.querySelector('.calendar__prev-title') ||
    document.querySelector('.calendar__after-title')
  ) {
    return;
  }
  const $tempPrevTitle = document.createElement('div');
  $tempPrevTitle.className = 'calendar__prev-title';
  $tempPrevTitle.innerHTML = `${nowYear}년 ${nowMonth + 1}월`;
  $prevMonthSection.insertBefore(
    $tempPrevTitle,
    document.querySelector('.calendar__prev-body')
  );

  const $tempAfterTitle = document.createElement('div');
  $tempAfterTitle.className = 'calendar__after-title';
  $tempAfterTitle.innerHTML = `${nowYear}년 ${nowMonth + 2}월`;
  $afterMonthSection.insertBefore(
    $tempAfterTitle,
    document.querySelector('.calendar__after-body')
  );
});

window.addEventListener('click', (event) => {
  if (event.target === $modalBackground) {
    $calendar.classList.remove('calendar');
    document.body.style.backgroundColor = 'white';
    $modalBackground.style.zIndex = 0;
  }
});

$calendar.addEventListener('click', (event) => {
  console.log(event.target.innerHTML);
  if (isNaN(Number(event.target.innerHTML)) || event.target.innerHTML === '') {
    return;
  }
  event.target.style.borderRadius = '50%';
  event.target.style.backgroundColor = 'black';
  event.target.style.color = 'white';
});
