// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
    const headerInput = document.querySelector('.header__ipnut');
    const headerButton = document.querySelector('.header__button');

    const list = document.querySelector('.list__ul');
    const listLi = document.querySelector('.list__li');

    let done = 0;
    let inProgress = 0;

    function showDone(arg) {
        const elem = document.querySelector('.header__done');
        elem.innerHTML = `Done: ${arg}`;
    }

    function showInProgress(arg) {
        const elem = document.querySelector('.header__progress');
        elem.innerHTML = `In Progress: ${arg}`;
    }

    function showAll(numb1, numb2) {
        const all = numb1 + numb2;
        const elem = document.querySelector('.header__all');
        elem.innerHTML = `All: ${all}`;
    }

    function createTask(item) {
        const newItem = item.cloneNode(true);

        newItem.classList.remove('none');
        newItem.dataset.done = 'false';
        newItem.querySelector('.list__task').value = headerInput.value;

        newItem.querySelector('.list__checkbox').addEventListener('click', () => {
            if (newItem.querySelector('.list__task').disabled !== true) {
                newItem.querySelector('.list__task').disabled = true;
                newItem.dataset.done = 'true';
            } else {
                newItem.querySelector('.list__task').disabled = false;
                newItem.dataset.done = 'false';
            }
        });

        newItem.querySelector('.list__button').addEventListener('click', () => {
            newItem.remove();
        });

        list.appendChild(newItem);

        inProgress += 1;

        showInProgress(inProgress);
        showDone(done);
        showAll(done, inProgress);

        return newItem;
    }

    function sumItem(item) {
        item.querySelector('.list__checkbox').addEventListener('change', () => {
            if (item.dataset.done === 'true') {
                done += 1;
                inProgress -= 1;
            } else if (item.dataset.done === 'false') {
                done -= 1;
                inProgress += 1;
            }

            showInProgress(inProgress);
            showDone(done);
            showAll(done, inProgress);
        });

        item.querySelector('.list__button').addEventListener('click', () => {
            if (item.dataset.done === 'true') {
                done -= 1;
            } else if (item.dataset.done === 'false') {
                inProgress -= 1;
            }
            showInProgress(inProgress);
            showDone(done);
            showAll(done, inProgress);
        });

    }

    headerButton.addEventListener('click', () => {
        if (headerInput.value !== '') {
            const task = createTask(listLi);
            sumItem(task);

            headerInput.value = '';
        } else {
            console.warn('Enter your task');
        }
    });

    headerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (headerInput.value !== '') {
                const task = createTask(listLi);
                sumItem(task);

                headerInput.value = '';
            } else {
                console.warn('Enter your task');
            }
        }
    });
});
