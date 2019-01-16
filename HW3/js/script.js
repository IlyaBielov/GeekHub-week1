document.addEventListener("DOMContentLoaded", () => {

    let slider = document.querySelector(".slider");
    let slider__imgs = document.querySelector(".slider__img").children;
    let slider__items = document.querySelectorAll(".slider__item");
    let prev = document.querySelector("#prev");
    let next = document.querySelector("#next");
    let slider__lenght = slider__items.length;
    let currentSlide = 1;

    activate(slider__imgs, currentSlide);

    slider.addEventListener("slide", function (e) {
        currentSlide = e.detail.item;
        activate(slider__imgs, currentSlide);
    });

    function activate(items, k) {
        for (let i = 0; i < items.length; i++) {
            item = items[i];
            if (i === k) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
    }

    next.addEventListener("click", (e) => {
        let i = (currentSlide + 1) % slider__lenght;
        let event = new CustomEvent("slide", {
            detail: {
                item: i
            }
        });
        slider.dispatchEvent(event);  // инициализация ивента, "область видимости"????
    });

    prev.addEventListener("click", (e) => {
        let i = currentSlide === 0 ? slider__lenght - 1 : currentSlide - 1;
        let event = new CustomEvent("slide", {
            detail: {
                item: i
            }
        });
        slider.dispatchEvent(event);  // инициализация ивента, 2область видимости"????
    });
});