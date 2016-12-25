function navSticker() {
    document.body.onscroll = function () {
        var visualiser = document.body.clientHeight - header.getBoundingClientRect().bottom;
        if (visualiser > 0 && header.getBoundingClientRect().bottom < 0) {
            navSticky.classList.add('header-products__nav-sticky_is-visible');
            toTopButton.classList.add('back-to-top-button_is-visible')
        } else {
            navSticky.classList.remove('header-products__nav-sticky_is-visible');
            toTopButton.classList.remove('back-to-top-button_is-visible');
        }
    };
}

export {navSticker};