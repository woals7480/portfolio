const navContent = document.querySelectorAll(".nav__content-inactive");

navContent.forEach((content) => {
  content.addEventListener("mouseover", (item) => {
    const length = item.target.classList.length;
    const activeContent = document.querySelector(
      `.${item.target.classList[length - 1]}`
    );
    activeContent.className += " nav__content-active";
  });

  content.addEventListener("mouseout", (item) => {
    const length = item.target.classList.length;
    const activeContent = document.querySelector(
      `.${item.target.classList[length - 2]}`
    );
    activeContent.classList.remove("nav__content-active");
  });
});
