document.addEventListener('DOMContentLoaded', () => {

    const headerInput = document.querySelector('.header__ipnut');
    const header__button = document.querySelector('.header__button');

    const list = document.querySelector('.list');
    const form = document.querySelector('.list__form');

    function out(form) {
        const newForm = form.cloneNode(true);
        newForm.classList.remove('none');
        newForm.firstElementChild.value = headerInput.value;

        if (headerInput.value !== "") {
            list.appendChild(newForm);
        }
        
        headerInput.value = "";
    }
    
    header__button.addEventListener('click', function () {
        out(form);        
    });

    headerInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            out(form);
        }
    });
});
