const progressElement = document.querySelector('.progress-bar');

const progressObserver = new ScrollProgress((x, y) => {
    progressElement.style.width = y * 100 + '%';
});