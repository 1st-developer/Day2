document.addEventListener('DOMContentLoaded', function () {
    const btnstart = document.querySelector('.bull ion-icon');
    const wrapper = document.querySelector('.google');

    function showwrapper() {
        if (wrapper.classList.contains('show')) {
            wrapper.classList.remove('show'); // إخفاء العنصر إذا كان ظاهرًا
        } else {
            wrapper.classList.add('show');    // إظهار العنصر إذا كان مخفيًا
        }
    }

    btnstart.addEventListener('click', function () {
        showwrapper();
    });
});