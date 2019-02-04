document.addEventListener('DOMContentLoaded', () => {

    const headerInput = document.querySelector('.header__ipnut');
    const header__button = document.querySelector('.header__button');

    const list = document.querySelector('.list');
    const item = document.querySelector('.list__form');

    header__button.addEventListener('click', function () {
        if (headerInput.value !== "") {
            
            createTask(item);

            headerInput.value = "";
        } else {
            alert('Enter your task');
        }
    });

    /**
    * @param {Element} item
    */
    function createTask(item) {
        const newItem = item.cloneNode(true);

        newItem.classList.remove('none');
        newItem.querySelector('.list__task').value = headerInput.value;

        newItem.querySelector('.list__checkbox').addEventListener('click', function () {
            if (newItem.querySelector('.list__task').disabled !== true) {
                newItem.querySelector('.list__task').disabled = true;
            } else {
                newItem.querySelector('.list__task').disabled = false;
            }

        });

        newItem.querySelector('.list__button').addEventListener('click', function () {
            newItem.remove();
        });

        list.appendChild(newItem);
        return newItem;
    }
});
