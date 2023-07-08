document.addEventListener('DOMContentLoaded', function() {
    var centerText = document.querySelector('.center-text');
    var container = document.querySelector('.container');

    document.addEventListener('click', function() {
        centerText.style.opacity = '0';
        setTimeout(function() {
            centerText.style.display = 'none';
            container.classList.add('fade-in');
        }, 1000);
    });
});
