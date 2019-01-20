document.addEventListener("DOMContentLoaded", () => {
    let slider = document.querySelector(".slider");
    let slider__imgs = document.querySelectorAll(".slider__img");
    let slider__dataMore = document.querySelectorAll(".data-more");
    let slider__data = Array.from(document.querySelectorAll(".data"));
    let prev = document.querySelector("#prev");
    let next = document.querySelector("#next");
    let slider__lenght = slider__imgs.length;
    let currentSlide = 1;

    addItemNumbers(slider__data);

    activate(slider__imgs, currentSlide);
    activate(slider__dataMore, currentSlide);
    dataActivate(slider__data, currentSlide);

    slider.addEventListener("slide", function (e) {
        currentSlide = e.detail.item;
        activate(slider__imgs, currentSlide);
        activate(slider__dataMore, currentSlide);
        dataActivate(slider__data, currentSlide);
    });

    function activate(items, k) {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (i === k) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        }
    }

    // так сверстал
    function dataActivate(items, k) {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (i === k) {
                item.classList.add("data-active");
            } else {
                item.classList.remove("data-active");
            }
        }
    }

    next.addEventListener("click", e => {
        let i = (currentSlide + 1) % slider__lenght;
        let event = new CustomEvent("slide", {
            detail: {
                item: i
            }
        });
        slider.dispatchEvent(event);
    });

    prev.addEventListener("click", e => {
        let i = currentSlide === 0 ? slider__lenght - 1 : currentSlide - 1;
        let event = new CustomEvent("slide", {
            detail: {
                item: i
            }
        });
        slider.dispatchEvent(event);
    });

    for (let item of slider__data) {
        item.addEventListener("click", function (e) {
            let event = new CustomEvent("slide", {
                detail: {
                    item: +this.dataset.itemNumber
                }
            });
            slider.dispatchEvent(event);
        });
    }

    function addItemNumbers(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].dataset.itemNumber = i;
        }
    }
});
