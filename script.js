const boxes = document.querySelectorAll('.mini_box');

boxes.forEach((box) => {
    box.style.backgroundColor = box.getAttribute('color');
});

const gradientButtons = document.querySelectorAll('.cfet_menu');

gradientButtons.forEach((button) => {
    button.addEventListener('click', () => {
        boxes.forEach((box) => {
            box.style.background = button.dataset.gradient;
        });
    });
});

const backgroundButtons = document.querySelectorAll('.figura_menu');

backgroundButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getComputedStyle(button).backgroundColor;
    });
});