let texts = Array.from(document.querySelectorAll('.changing-text p'));
let i = 0;

setInterval(() => {
    texts.forEach(text => {
        text.classList.remove('is-visible');
    });
    texts[i].classList.add('is-visible');
    i += 1;
    if (i >= texts.length) {
        i = 0;
    }
}, 2000);

let button = document.querySelector(".menu-icon")
let menu = document.querySelector(".nav-links-for-mobile");
let options = 'visible'

button.addEventListener("click", function () {
    if (options === 'hidden') {
        menu.style.display = "none";
        options = 'visible'
    }

    else {
        menu.style.display = "flex";
        options = 'hidden';
    }

})

