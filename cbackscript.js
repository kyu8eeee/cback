let popupClosed = true;
const popup = document.querySelector('.my-popup-new');
const link = popup.querySelector('a');

setTimeout(function() {
  if (popupClosed) {
    popup.style.display = 'flex';
  }
}, 5000);

link.addEventListener('click', function(e) {
  e.preventDefault();
  popupClosed = false;
  setTimeout(function() {
    if (!window.closed) {
      popup.style.display = 'none';
    }
  }, 3000);
});

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.isLinkPage && event.state.timeSpent >= 3000) {
    popupClosed = false;
    popup.style.display = 'none';
  }
});

setTimeout(function() {
  window.close();
}, 3000);
