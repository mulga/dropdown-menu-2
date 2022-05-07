let menuItem = document.querySelectorAll(".menu-item");

// menuItem.addEventListener("onmouseover", () => {
//   subMenuList.style.transform = "translateY(0)";
// });

menuItem.onmouseover = function () {
  document.querySelectorAll(".sub-menu-list").style.transform = "translateY(0)";
  console.log("test");
};
