let popupClosed = true;
const popup = document.querySelector('.my-popup-new');
const link = popup.querySelector('a');
const popupInterval = setInterval(function() {
  if (popupClosed) {
    popup.style.display = 'block';
  }
}, 3000);

link.addEventListener('click', function() {
  popupClosed = false;
  setTimeout(function() {
    clearInterval(popupInterval);
    popup.style.display = 'none';
  }, 3000);
});

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.isLinkPage && event.state.timeSpent >= 3000) {
    popupClosed = false;
    clearInterval(popupInterval);
    popup.style.display = 'none';
  }
});
