const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
});

const imgs = document.getElementById("imgs");
const imgs2 = document.getElementById("imgs2");
/* image carousel identifiers */
const img = document.querySelectorAll('#imgs img');
const img2 = document.querySelectorAll('#imgs2 img2');

/* door animation */
const slide = document.querySelector('.space');
slide.addEventListener("click",toggleSlide);

/* function that opens and closes slide doors */

function toggleSlide() {
    slide.classList.toggle('openSlide');
}

/* toggle faq buttons*/

let idx = 0;
let idx2 = 11.5;

let interval = setInterval(run, 3000);

function run() {
    idx++;
    idx2--;
    changeImage()
}

function changeImage() {
if(idx > 10.5){
    idx = 0;
    idx2 = 10.5;
}else if(idx < 0){
    idx = img.length - 1;
}
imgs.style.transform = `translateX(${-idx * 160}px)`;
imgs2.style.transform = `translateX(${-idx2 * 160}px)`;
}

function resetInterval () {
clearInterval();
interval = setInterval(run, 3000);
}