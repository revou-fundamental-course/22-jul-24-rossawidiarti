let menuList = document.getElementById("menuList")
                menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let slideBanner = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slideBanner.length;
        slides[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 5000);
});