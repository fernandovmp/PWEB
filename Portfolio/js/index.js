const backToTopButton = createBackToTopButton();
document.body.appendChild(backToTopButton);

function createBackToTopButton() {
    const backToTop = document.createElement('a');
    const backToTopIcon = document.createElement('span');
    backToTop.classList.add('go-top');
    backToTop.setAttribute('href', '#home');
    backToTop.style.display = "none";
    backToTopIcon.classList.add('black-icon', 'icon-button', 'iconify');
    backToTopIcon.setAttribute('data-icon', 'mdi:arrow-up-circle-outline');
    backToTop.appendChild(backToTopIcon);
    return backToTop;
}

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    const scrollThresholdToShow = 45;
    if (document.body.scrollTop > scrollThresholdToShow || document.documentElement.scrollTop > scrollThresholdToShow) {
        backToTopButton.style.display = "block";
        return;
    }
    backToTopButton.style.display = "none";
}
