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
