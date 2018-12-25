document.addEventListener("DOMContentLoaded", () => {
  
  let slider__img = Array.from(document.querySelector(".slider__img").children);
  let slider__item = Array.from(document.querySelectorAll(".data-more"));
  let buttom_prev = document.querySelector("#prev");
  let buttom_next = document.querySelector("#next");

  
  let i = 0;
  buttom_next.addEventListener("click", () => {
    if(i >= slider__img.length) {
      i = 0;
    }
    if(slider__img[i].classList == "slider__show") {
      slider__img[i].classList.replace("slider__show", "slider__hidden");
      if(slider__img[i+1] == undefined){
        slider__img[i].classList.replace("slider__show", "slider__hidden");
        slider__img[0].classList.replace("slider__hidden", "slider__show");
      } else {
        slider__img[i+1].classList.replace("slider__hidden", "slider__show");
      }
    }
    if(slider__item[i].classList == "data-more") {
      slider__item[i].classList.add("hidden");

      if(slider__item[i+1] != undefined) {
        slider__item[i+1].classList.remove("hidden");
      } else {
        slider__item[0].classList.remove("hidden");
      }
    } 
    i++;
  });

  buttom_prev.addEventListener("click", () => {
    if(slider__img[i-1] == undefined) {
      slider__img[slider__img.length - 1].classList.replace("slider__hidden", "slider__show");
      slider__img[i].classList.replace("slider__show", "slider__hidden");
    } else if(slider__img[i].classList == "slider__show") {
      slider__img[i].classList.replace("slider__show", "slider__hidden"); 
      slider__img[i-1].classList.replace("slider__hidden", "slider__show"); 
    }
    if(slider__item[i].classList == "data-more") {
      slider__item[i].classList.add("hidden");
      if(slider__img[i-1] == undefined) {
        slider__item[slider__img.length - 1].classList.remove("hidden");
      } else {
        slider__item[i-1].classList.remove("hidden");
      }
    } 

    if(i <= 0) {
      i = slider__img.length - 1;
    } else {
      i--;
    }
  });

});
