document.addEventListener('DOMContentLoaded', function () {
    const btnstart = document.querySelector('.bull ion-icon');
    const wrapper = document.querySelector('.google');

    function showwrapper() {
        if (wrapper.classList.contains('show')) {
            wrapper.classList.remove('show');
        } else {
            wrapper.classList.add('show');  
        }
    }

    btnstart.addEventListener('click', function () {
        showwrapper();
    });
});
