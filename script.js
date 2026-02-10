// Subtle sway for logo
const logo = document.querySelector('.logo');
let position = 0;
let direction = 1;

function sway() {
    position += 0.2 * direction;
    if (position > 10 || position < -10) direction *= -1;
    logo.style.transform = `translateX(${position}px)`; 
    requestAnimationFrame(sway);
}
sway();

// Floating coffee beans and citrus slices
const container = document.querySelector('.floating-elements');

function createElement(type) {
    const elem = document.createElement('div');
    elem.classList.add(type);

    elem.style.left = Math.random() * window.innerWidth + 'px';
    elem.style.top = window.innerHeight + 'px';
    elem.style.transform = `scale(${0.5 + Math.random()})`;

    container.appendChild(elem);

    let top = window.innerHeight;
    const speed = 1 + Math.random() * 2;

    function floatUp() {
        top -= speed;
        elem.style.top = top + 'px';
        if (top > -30) {
            requestAnimationFrame(floatUp);
        } else {
            elem.remove();
        }
    }
    floatUp();
}

// Randomly create beans and citrus slices every 0.5s
setInterval(() => {
    createElement('bean');
    createElement('citrus');
}, 500);