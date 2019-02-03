document.addEventListener('DOMContentLoaded', () => {

    class ListForm {
        /**
         * @param {headerIpnut.value} text 
         */
        constructor(text = '') {
            this._form = document.createElement('form');
            this._form.classList.add('list__form');

            this._inputTask = document.createElement('input');
            this._inputTask.classList.add('list__task');
            this._inputTask.setAttribute('type', 'text');
            this._inputTask.value = text;

            this._checkbox = document.createElement('input');
            this._checkbox.classList.add('list__checkbox');
            this._checkbox.setAttribute("type", "checkbox");
            this._checkbox.setAttribute("name", "list__checkbox");
            this._checkbox.setAttribute("id", "list__checkbox");

            this._button = document.createElement('button');
            this._button.classList.add('list__button');
            this._button.setAttribute("type", "button");
            this._button.setAttribute("value", "");
            this._button.innerHTML = "&Cross;";

            this._form.appendChild(this._inputTask);
            this._form.appendChild(this._checkbox);
            this._form.appendChild(this._button);

            this._checkbox.addEventListener('click', () => {
                if (this._inputTask.disabled !== true) {
                    this._inputTask.disabled = true;
                } else {
                    this._inputTask.disabled = false;
                }
            });

            this._button.addEventListener('click', () => {
                this._form.remove();
            });
        }

        get form() {
            return this._form;
        }
    }

    const headerIpnut = document.querySelector(".header__ipnut");
    const list = document.querySelector('.list');
    const headerButton = document.querySelector('.header__button');

    headerButton.addEventListener('click', function () {
        if (headerIpnut.value !== "") {
            const listForm = new ListForm(headerIpnut.value);
            list.appendChild(listForm.form);
            headerIpnut.value = "";
        }
    });

    headerIpnut.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (headerIpnut.value !== "") {
                const listForm = new ListForm(headerIpnut.value);
                list.appendChild(listForm.form);
                headerIpnut.value = "";
            }
        }
    });
});
