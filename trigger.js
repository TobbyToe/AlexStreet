window.onload = function () {
  const mobile_menu = document.querySelector(".hamburger");
  const mobile_menu_opened = document.querySelector(".mobile-menu");
  const mobile_menu_list = document.querySelector(".anchor-nav");
  mobile_menu.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
    mobile_menu_opened.classList.toggle("opened");
  });
  mobile_menu_list.addEventListener("click",function(){
    mobile_menu.classList.toggle("is-active");
    mobile_menu_opened.classList.toggle("opened");
  })
};

