let popupClosed = true;
const popup = document.querySelector('.my-popup-new');
const link = popup.querySelector('a');
setTimeout(function() {
  if (popupClosed) {
    popup.style.display = 'block';
  }
}, 5000); 

link.addEventListener('click', function() {
  popupClosed = false;
  setTimeout(function() {
    if (!window.closed) {
      popup.style.display = 'none';
    }
  }, 5000);
});

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.isLinkPage && event.state.timeSpent >= 5000) {
    popupClosed = false;
    popup.style.display = 'none';
  }
});
