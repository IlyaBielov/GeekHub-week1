document.addEventListener('DOMContentLoaded', () => {

    const headerIpnut = document.querySelector(".header__ipnut");
    const list = document.querySelector('.list');
    const headerButton = document.querySelector('.header__button');

    class ListForm {
        /**
         * @param {string} nameClass 
         * @param  {...Node} elements 
         */
        constructor(nameClass, ...elements) {
            this._form = document.createElement('form');
            this._form.classList.add(nameClass);

            if (elements.length > 0) {
                for (const elem of elements) {
                    this._form.appendChild(elem);
                }
            }
        }

        get getForm() {
            return this._form;
        }
    }

    class ElemForm {
        /**
         * @param {string} className 
         * @param {string} type 
         * @param {string} value 
         */
        constructor(className, type, value = '') {
            this._elemForm = document.createElement('input');
            this._elemForm.classList.add(className);
            this._elemForm.setAttribute('type', type);
            this._elemForm.setAttribute('value', value);
            this._elemForm.setAttribute('name', className);

            if (type === 'button') {
                this._elemForm.addEventListener('click', () => {
                   this._elemForm.parentElement.remove();
                });
            }

            if (type === 'checkbox') {
                this._elemForm.addEventListener('click', () => {
                    const listTask = this._elemForm.parentElement.querySelector('.list__task');
                    if (listTask.disabled !== true) {
                        listTask.disabled = true;
                    } else if(listTask.disabled === true) {
                        listTask.disabled = false;
                    }
                });
            }
        }

        get getElem() {
            return this._elemForm;
        }
    }

    headerButton.addEventListener('click', function () {
        if (headerIpnut.value !== "") {
            const checkbox = new ElemForm('list__checkbox', 'checkbox');
            const button = new ElemForm('list__button', 'button', '⨯');
            const input = new ElemForm('list__task', 'text', headerIpnut.value);
            const form = new ListForm("list__form", input.getElem, button.getElem, checkbox.getElem);
            list.appendChild(form.getForm);
            headerIpnut.value = "";
        }
    });

    headerIpnut.addEventListener('keypress', function (e) {
        if (headerIpnut.value !== "") {
            if (e.key === 'Enter') {
                const checkbox = new ElemForm('list__checkbox', 'checkbox');
                const button = new ElemForm('list__button', 'button', '⨯');
                const input = new ElemForm('list__task', 'text', headerIpnut.value);
                const form = new ListForm("list__form", input.getElem, button.getElem, checkbox.getElem);
                list.appendChild(form.getForm);
                headerIpnut.value = "";
            }
        }
    });
});
