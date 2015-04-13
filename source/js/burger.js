(function(){
  var btn_open = document.querySelector(".main-nav__toggle");
  var btn_close = document.querySelector(".main-nav__toggle--cross");
  var nav = document.querySelector(".main-nav");

  btn_open.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.toggle("main-nav--active");
  });

  btn_close.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.remove("main-nav--active");
  });

})();
