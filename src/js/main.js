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

// 클릭 시 캘린더 모달 띄우기
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

  document.querySelectorAll('.search-form div').forEach((node, i) => {
    if (i === 0) {
      node.innerHTML = '숙소';
    } else if (i === 1) {
      node.innerHTML = '체험';
    } else if (i === 2) {
      node.innerHTML = '온라인 체험';
      node.style.color = 'black';
    } else {
      node.style.display = 'none';
      node.parentElement.style.border = 'transparent';
    }
  });

  // header__body display none
  document.querySelector('.place-concept__list').style.display = 'none';
  document.querySelector('.place-concept__next-btn').style.display = 'none';
  document.querySelector('.place-concept__filter').style.display = 'none';

  // 모달창 생성 시 header__body content
  document.querySelector(
    '.place-concept'
  ).innerHTML += `<div class="search__form--temp">
  <div class="where--temp">
    <p class="title--temp">여행지</p>
    <p class="content--temp">여행지 검색</p>
  </div>
  <div class="when-check-in--temp">
    <p class="title--temp">체크인</p>
    <p class="content--temp check-in__info">날짜 입력</p>
  </div>
  <div class="when-check-out--temp">
    <p class="title--temp">체크아웃</p>
    <p class="content--temp check-out__info">날짜 입력</p>
  </div>
  <div class="who--temp">
    <p class="title--temp">여행자</p>
    <p class="content--temp">게스트 추가</p>
  </div>
  <div class="search-button--temp">
    <div class="search-button__outer">
      <i class="fa-solid fa-magnifying-glass search-etc--temp"></i>
      <span class="search-etc--temp">검색</span>
    </div>
  </div>
</div>`;

  document.querySelector('.header').style.backgroundColor = 'white';
});

// 모달창 외부 클릭 시 원래 모습으로 돌아오기
window.addEventListener('click', (event) => {
  if (event.target !== $modalBackground) {
    return;
  }
  $calendar.classList.remove('calendar');
  document.body.style.backgroundColor = 'white';
  $modalBackground.style.zIndex = 0;

  document.querySelectorAll('.search-form div').forEach((node, i) => {
    if (i === 0) {
      node.innerHTML = '어디든지';
    } else if (i === 1) {
      node.innerHTML = '언제든 일주일';
    } else if (i === 2) {
      node.innerHTML = '게스트 추가';
      node.style.color = '#a5a5a5';
    } else {
      node.style.display = 'block';
      node.parentElement.style.border = '1px solid #a5a5a5';
    }
  });

  // header__body display flex
  document.querySelector('.place-concept__list').style.display = 'flex';
  document.querySelector('.place-concept__next-btn').style.display = 'flex';
  document.querySelector('.place-concept__filter').style.display = 'flex';

  document.querySelector('.search__form--temp').style.display = 'none';
});

$calendar.addEventListener('click', (event) => {
  if (isNaN(Number(event.target.innerHTML)) || event.target.innerHTML === '') {
    return;
  }
  event.target.style.borderRadius = '50%';
  event.target.style.backgroundColor = 'black';
  event.target.style.color = 'white';
});
