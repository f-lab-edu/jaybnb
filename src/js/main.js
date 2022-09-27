import {
  prevMonthList,
  afterMonthList,
  nowYear,
  nowMonth,
  nowDate,
  makePrevMonthList,
  makeAfterMonthList,
} from './calendar.js';
import '../css/style.css';
let tempYear = nowYear;
let tempMonth = nowMonth;

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

const selectDatePrev = [];
const selectDateAfter = [];

const $prevMonthSection = document.querySelector('.calendar__prev-month');
const $afterMonthSection = document.querySelector('.calendar__after-month');

$searchWhenBtn.addEventListener('click', () => {
  if ($prevFirstRow.innerHTML !== '') {
    return;
  }
  makePrevCalendar(makePrevMonthList(tempYear, tempMonth));
  [...document.querySelectorAll('.prev')].forEach((ele) => {
    if (+ele.innerHTML < nowDate) {
      ele.style.color = 'lightgray';
    }
  });
});

function makePrevCalendar(monthList) {
  // 초기화(버튼 기능 추가 위해)
  $prevFirstRow.innerHTML = '';
  $prevSecondRow.innerHTML = '';
  $prevThirdRow.innerHTML = '';
  $prevFourthRow.innerHTML = '';
  $prevFifthRow.innerHTML = '';
  $prevSixthRow.innerHTML = '';

  // 달력 시작부분 빈값 채우기
  for (let i = 0; i < monthList[0].getDay(); i++) {
    $prevFirstRow.innerHTML += `<td></td>`;
  }
  let weekCount = 0;
  for (let date of monthList) {
    switch (weekCount) {
      case 0:
        $prevFirstRow.innerHTML += `<td class="table__number prev prev-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 1:
        $prevSecondRow.innerHTML += `<td class="table__number prev prev-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 2:
        $prevThirdRow.innerHTML += `<td class="table__number prev prev-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 3:
        $prevFourthRow.innerHTML += `<td class="table__number prev prev-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 4:
        $prevFifthRow.innerHTML += `<td class="table__number prev prev-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 5:
        $prevSixthRow.innerHTML += `<td class="table__number prev prev-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
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
  makeAfterCalendar(makeAfterMonthList(tempYear, tempMonth));
});

function makeAfterCalendar(monthList) {
  // 초기화(버튼 기능 추가 위해)
  $afterFirstRow.innerHTML = '';
  $afterSecondRow.innerHTML = '';
  $afterThirdRow.innerHTML = '';
  $afterFourthRow.innerHTML = '';
  $afterFifthRow.innerHTML = '';
  $afterSixthRow.innerHTML = '';
  // 달력 시작부분 빈값 채우기
  for (let i = 0; i < monthList[0].getDay(); i++) {
    $afterFirstRow.innerHTML += `<td></td>`;
  }
  let weekCount = 0;
  for (let date of monthList) {
    switch (weekCount) {
      case 0:
        $afterFirstRow.innerHTML += `<td class="table__number after after-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 1:
        $afterSecondRow.innerHTML += `<td class="table__number after after-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 2:
        $afterThirdRow.innerHTML += `<td class="table__number after after-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 3:
        $afterFourthRow.innerHTML += `<td class="table__number after after-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 4:
        $afterFifthRow.innerHTML += `<td class="table__number after after-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
      case 5:
        $afterSixthRow.innerHTML += `<td class="table__number after after-${
          date.getMonth() + 1
        }-${date.getDate()}">${date.getDate()}</td>`;
        break;
    }
    if (date.getDay() === 6) {
      weekCount++;
    }
  }
}

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
  $tempPrevTitle.innerHTML = `${tempYear}년 ${tempMonth + 1}월`;
  $prevMonthSection.insertBefore(
    $tempPrevTitle,
    document.querySelector('.calendar__prev-body')
  );

  const $tempAfterTitle = document.createElement('div');
  $tempAfterTitle.className = 'calendar__after-title';
  $tempAfterTitle.innerHTML = `${tempYear}년 ${tempMonth + 2}월`;
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
  const targetDate = event.target;

  if (isNaN(Number(targetDate.innerHTML)) || targetDate.innerHTML === '') {
    return;
  }

  // 전달력, 다음달력 데이터 각각 리스트에 담아주기
  const monthFirstWord = targetDate.classList[1][0];
  if (monthFirstWord === 'p') {
    selectDatePrev.push(targetDate);
  } else {
    selectDateAfter.push(targetDate);
  }

  // 달력 버튼 스타일
  function dateSelectedStyle(target) {
    target.style.borderRadius = '50%';
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
  }
  // 오늘 기준 과거 날짜는 스타일 적용 X
  if (targetDate.style.color !== 'lightgray') {
    dateSelectedStyle(targetDate);
  }
  // 선택한 날짜 사이 스타일 변경하기
  if (selectDatePrev.length + selectDateAfter.length === 2) {
    if (selectDatePrev.length === 2) {
      const firstDate = +selectDatePrev[0].innerHTML;
      const secondDate = +selectDatePrev[1].innerHTML;

      document.querySelectorAll('.prev').forEach((ele) => {
        if (+ele.innerHTML > firstDate && +ele.innerHTML < secondDate) {
          ele.style.backgroundColor = '#ebebeb';
          ele.style.borderRadius = 0;
        }
      });
    } else if (selectDateAfter.length === 2) {
      const firstDate = +selectDateAfter[0].innerHTML;
      const secondDate = +selectDateAfter[1].innerHTML;

      document.querySelectorAll('.after').forEach((ele) => {
        if (+ele.innerHTML > firstDate && +ele.innerHTML < secondDate) {
          ele.style.backgroundColor = '#ebebeb';
          ele.style.borderRadius = 0;
        }
      });
    } else if (selectDatePrev.length === 1 && selectDateAfter.length === 1) {
      const firstDate = +selectDatePrev[0].innerHTML;
      const secondDate = +selectDateAfter[0].innerHTML;

      document.querySelectorAll('.prev').forEach((ele) => {
        if (+ele.innerHTML > firstDate) {
          ele.style.backgroundColor = '#ebebeb';
          ele.style.borderRadius = 0;
        }
      });
      document.querySelectorAll('.after').forEach((ele) => {
        if (+ele.innerHTML < secondDate) {
          ele.style.backgroundColor = '#ebebeb';
          ele.style.borderRadius = 0;
        }
      });
    }
  }

  // 날짜 클릭 시 새로운 헤더에 해당 날짜 입력
  const checkInInfo = document.querySelector('.check-in__info');
  const checkOutInfo = document.querySelector('.check-out__info');

  if (checkInInfo.innerHTML === '날짜 입력') {
    checkInInfo.innerHTML = `${targetDate.classList[2].split('-')[1]}월 ${
      targetDate.classList[2].split('-')[2]
    }일`;
    document.querySelector('.when-check-in--temp').style.backgroundColor =
      '#ebebeb';
    document.querySelector('.when-check-in--temp').style.padding = '0';
    document.querySelector('.when-check-in--temp').style.boxShadow = 'none';
    checkInInfo.style.color = 'black';
    checkInInfo.style.fontSize = '16px';
    checkInInfo.style.fontWeight = 'bold';

    document.querySelector('.when-check-out--temp').style.backgroundColor =
      'white';
    document.querySelector('.when-check-out--temp').style.padding =
      '3% 8% 3% 3%';
    document.querySelector('.when-check-out--temp').style.borderRadius = '25px';
    document.querySelector('.when-check-out--temp').style.boxShadow =
      '1px 1px 10px #a5a5a5a5';
  } else {
    checkOutInfo.innerHTML = `${targetDate.classList[2].split('-')[1]}월 ${
      targetDate.classList[2].split('-')[2]
    }일`;

    checkOutInfo.style.color = 'black';
    checkOutInfo.style.fontSize = '16px';
    checkOutInfo.style.fontWeight = 'bold';
  }
});

const backBtn = document.querySelector('.calendar__back-button');
const nextBtn = document.querySelector('.calendar__next-button');
let btnCount = 0;
backBtn.addEventListener('click', (event) => {
  tempMonth--;
  btnCount--;

  makePrevCalendar(makePrevMonthList(tempYear, tempMonth));
  makeAfterCalendar(makeAfterMonthList(tempYear, tempMonth));

  if (btnCount <= 0) {
    backBtn.style.display = 'none';
  }

  document.querySelector('.calendar__after-title').innerHTML = `${tempYear}년 ${
    tempMonth + 2
  }월`;
  // 연도 넘어가는 부분
  if (tempMonth <= -1) {
    tempMonth = 11;
    --tempYear;
  }
  document.querySelector('.calendar__prev-title').innerHTML = `${tempYear}년 ${
    tempMonth + 1
  }월`;

  // 달력 이전으로 돌릴 때, 현재 달의 현재 일 전 일들 회색 적용
  [...document.querySelectorAll('.prev')].forEach((ele) => {
    if (
      +ele.innerHTML < nowDate &&
      +ele.classList[2].split('-')[1] === nowMonth + 1
    ) {
      ele.style.color = 'lightgray';
    }
  });
});

nextBtn.addEventListener('click', (event) => {
  tempMonth++;
  btnCount++;
  makePrevCalendar(makePrevMonthList(tempYear, tempMonth));
  makeAfterCalendar(makeAfterMonthList(tempYear, tempMonth));

  if (btnCount > 0) {
    backBtn.style.display = 'block';
  }

  document.querySelector('.calendar__prev-title').innerHTML = `${tempYear}년 ${
    tempMonth + 1
  }월`;

  // 연도 넘어가는 부분
  if (tempMonth >= 11) {
    tempMonth = -1;
    ++tempYear;
  }
  document.querySelector('.calendar__after-title').innerHTML = `${tempYear}년 ${
    tempMonth + 2
  }월`;
});
