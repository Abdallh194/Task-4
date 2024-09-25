const BackTopBtn = document.getElementById("backtopBtn");

window.onscroll = () => {
  scrollHandler();
};

const scrollHandler = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    BackTopBtn.style.display = "block";
  } else {
    BackTopBtn.style.display = "none";
  }
};

function ToTopHandler() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
