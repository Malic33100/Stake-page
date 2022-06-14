const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
});

const imgs = document.getElementById("imgs");
/* image carousel identifiers */
const img = document.querySelectorAll('#imgs img');

/* toggle faq buttons*/
let idx = 0;
let interval = setInterval(run, 4000);

function run() {
    idx++;
    changeImage()
}

function changeImage() {
if(idx > img.length - 1){
    idx = 0
}else if(idx < 0){
    idx = img.length - 1;
}
imgs.style.transform = `translateX(${-idx * 250}px)`;
}

function resetInterval () {
clearInterval();
interval = setInterval(run, 4000);
}