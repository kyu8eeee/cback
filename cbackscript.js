let popupClosed = true;
const popup = document.querySelector('.my-popup-new');
const link = popup.querySelector('a');

setTimeout(function() {
  if (popupClosed) {
    popup.style.display = 'flex';
  }
}, 5000); 

link.addEventListener('click', function(event) {
  event.preventDefault(); // 링크 이동을 막기 위해 기본 이벤트를 취소합니다.
  popupClosed = false;
  popup.style.display = 'none';
  window.open(link.href, '_blank'); // 링크 페이지를 새 탭에서 엽니다.
});

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.isLinkPage && event.state.timeSpent >= 3000) {
    popupClosed = false;
    popup.style.display = 'none';
  }
});

// 일정 시간이 지난 후에 팝업이 닫히도록 설정합니다.
setTimeout(function() {
  if (popupClosed) {
    popup.style.display = 'none';
  }
}, 10000);
let popupClosed = true;
const popup = document.querySelector('.my-popup-new');
const link = popup.querySelector('a');

setTimeout(function() {
  if (popupClosed) {
    popup.style.display = 'flex';
  }
}, 5000); 

link.addEventListener('click', function(event) {
  event.preventDefault(); // 링크 이동을 막기 위해 기본 이벤트를 취소합니다.
  popupClosed = false;
  popup.style.display = 'none';
  window.open(link.href, '_blank'); // 링크 페이지를 새 탭에서 엽니다.
});

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.isLinkPage && event.state.timeSpent >= 3000) {
    popupClosed = false;
    popup.style.display = 'none';
  }
});

// 일정 시간이 지난 후에 팝업이 닫히도록 설정합니다.
setTimeout(function() {
  if (popupClosed) {
    popup.style.display = 'none';
  }
}, 10000);
