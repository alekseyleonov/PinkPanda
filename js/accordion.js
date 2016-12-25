function accordion() {
    let accordionHead = document.querySelector('.header-accordion__head');
    let accordionList = document.querySelector('.header-accordion__list');

    accordionHead.addEventListener('click', function () {
        accordionList.classList.toggle('header-accordion__list_opened')
    });
    document.body.onclick = function () {
        accordionList.classList.remove('header-accordion__list_opened')
    };
    accordionHead.onclick = function (event) {
        event.stopImmediatePropagation()
    };
}

export {accordion}
