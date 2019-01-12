document.addEventListener("DOMContentLoaded", () => {
  let slider__img = document.querySelector(".slider__img").children;
  let slider__item = Array.from(document.querySelectorAll(".data-more")); // Просто заюзал посмотреть в чём разница
  let buttom_prev = document.querySelector("#prev");
  let buttom_next = document.querySelector("#next");

    
  let item_length = slider__item.length;
  let item = 0;
  function nextItem() {
    slider__img[item].classList.toggle("hidden");
    slider__item[item].classList.toggle("hidden");

    item = (item + 1) % item_length;

    slider__img[item].classList.toggle("hidden");
    slider__item[item].classList.toggle("hidden");
  }

  function prevItem() {
    slider__img[item].classList.toggle("hidden");
    slider__item[item].classList.toggle("hidden");

    item = (item - 1 + item_length) % item_length;

    slider__img[item].classList.toggle("hidden");
    slider__item[item].classList.toggle("hidden");
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
