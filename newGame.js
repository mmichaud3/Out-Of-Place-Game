// window.onload = function() {
//     const x = document.querySelector("g-frame.wrongFrame");
//     const z = document.querySelector("g-frame.wrongFrameTwo");
//     const y = document.querySelector("g-frame.correctFrame");
//     x.onclick = wrongSlide;
//     y.onclick = correctSlide; 
//     z.onclick = wrongSlide;
    
// };
// window.onload = function(){
//     document.getElementById("slideOneFrameOne").addEventListener("click", wrongSlide());
//     document.getElementById("slideOneFrameTwo").addEventListener("click", wrongSlide());
//     document.getElementById("slideOneFrameThree").addEventListener("click", correctSlide());

// }

function wrongSlide(slide) {
    var current = document.querySelector('g-slide.active');
    var next = document.querySelector(slide); //passes in slide from wrongSlide onclick in html
    current.classList.remove('active');
    next.classList.add('active');
    // setTimeout(function () {newSlide()},3000);
}
function correctSlide(slide) {
    const current = document.querySelector('g-slide.active');
    var next = document.querySelector(slide);
    current.classList.remove('active');
    next.classList.add('active');
    setTimeout(function () {newSlide()},3000);
    
}

function goBack(slide) {
    var current = document.querySelector('g-slide.active');
    var next = document.querySelector(slide); //passes in slide from goback buttons
    current.classList.remove('active');
    next.classList.add('active');
}

function newSlide(){
    let current = document.querySelector('g-slide.active');
    // let wrong = document.querySelector('g-slide.wrong')
    if (current.className = 'g-slide.correct' ) {
        let next = document.querySelector('g-slide.secondSlide');
        current.classList.remove('active');
        next.classList.add('active');
     } 
     else if (current.className = 'g-slide.correctTwo')  {
        // current = document.querySelector('g-slide.wrong');
        let next = document.querySelector('g-slide.thirdSlide');
        current.classList.remove('active');
        next.classList.add('active');
     }
    };



