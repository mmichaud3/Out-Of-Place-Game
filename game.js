window.addEventListener('DOMContentLoaded', function (e) {
    var presentation = document.querySelector('g-presentation');

    presentation.onclick = handlePresentationClick;
    presentation.addEventListener('animationend', handleAnimationEnd, false);
});

function handlePresentationClick(e) {
    var current = document.querySelector('g-slide.active');
    var next = current.nextElementSibling;

while (next && next.tagName != 'G-SLIDE') {
    next = next.nextElementSibling;
}

    if (next) {
        current.classList.remove('active');
        next.classList.add('active');

        next.querySelectorAll('.match').forEach(function (el) {
            setTimeout(function () { el.classList.remove('match'); }, 0);
        });
        var aa = parseInt(next.getAttribute('data-autoadvance'));

        if (!isNaN(aa)) {
            setTimeout(function (e) {
                handlePresentationClick(e);
            }, aa);
        }
    }
}

function handleAnimationEnd(e) {
    var slide = e.target.closest('g-slide');
    var aa = slide.getAttribute('data-autoadvance');

    if (aa == 'animationend' && slide.classList.contains('active')) {
        handlePresentationClick(e);
    }
}