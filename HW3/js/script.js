document.addEventListener("DOMContentLoaded", () => {
  let slider__img = document.querySelector(".slider__img").children;
  let slider__item = Array.from(document.querySelectorAll(".data-more")); // Просто заюзал посмотреть в чём разница
  let slider__data = document.querySelectorAll(".data");
  let buttom_prev = document.querySelector("#prev");
  let buttom_next = document.querySelector("#next");

  let item_length = slider__item.length;
  let item = 0;

  function activeClasses(item) {
    slider__img[item].classList.toggle("hidden");
    slider__item[item].classList.toggle("hidden");
    slider__data[item].classList.toggle("data-active");
    slider__data[item].lastElementChild.classList.toggle("data-month-active");
  }

  function nextItem() {
    activeClasses(item);

    item = (item + 1) % item_length;

    activeClasses(item);
  }

  function prevItem() {
    activeClasses(item);

    item = (item - 1 + item_length) % item_length;

    activeClasses(item);
  }

  buttom_next.addEventListener("click", nextItem);
  buttom_prev.addEventListener("click", prevItem);

  //не знаю как сделать по клику на айтем
  // for(let i = 0; i < item_length; i++) {
  //   slider__item[i].previousElementSibling.addEventListener("click", () => {
  //     slider__item[i].classList.remove("hidden");
  //     slider__img[i].classList.remove("hidden");
  //   });
  // }
});
