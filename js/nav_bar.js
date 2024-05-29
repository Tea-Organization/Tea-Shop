
let navBar = document.querySelector(".top");
let pageBtn = document.querySelector(".pageBtn");
let pageMenu = document.querySelector(".pageMenu");

window.onscroll = function () {
    if (window.scrollY >= 300) {
        navBar.style.cssText = "box-shadow: 0px 3px 10px #B0B9AE";
        pageMenu.classList.remove("active");

    } else {
        navBar.style.cssText = "box-shadow: 0px 0px 0px #fff";
        pageMenu.classList.remove("active");

    }
}

pageBtn.onclick = function () {
    pageMenu.classList.toggle("active");
}
let navbar = document.querySelector('#menu-btn');

navbar.onclick = () => {
    document.querySelector(".navbar").classList.toggle('active');

}

