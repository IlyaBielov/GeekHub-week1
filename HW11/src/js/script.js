// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
    const headerInput = document.querySelector('.header__ipnut');
    const headerButton = document.querySelector('.header__button');

    const list = document.querySelector('.list');
    const form = document.querySelector('.list__form');

    function createTask(item) {
        const newItem = item.cloneNode(true);

        newItem.classList.remove('none');
        newItem.querySelector('.list__task').value = headerInput.value;

        newItem.querySelector('.list__checkbox').addEventListener('click', () => {
            if (newItem.querySelector('.list__task').disabled !== true) {
                newItem.querySelector('.list__task').disabled = true;
            } else {
                newItem.querySelector('.list__task').disabled = false;
            }
        });

        newItem.querySelector('.list__button').addEventListener('click', () => {
            newItem.remove();
        });

        list.appendChild(newItem);
        return newItem;
    }

    headerButton.addEventListener('click', () => {
        if (headerInput.value !== '') {
            createTask(form);

            headerInput.value = '';
        } else {
            console.warn('Enter your task');
        }
    });
});
