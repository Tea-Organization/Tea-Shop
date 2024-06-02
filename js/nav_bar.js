


let btn = document.querySelector(".floatingBtn");
let navBar = document.querySelector(".top");
let pageBtn = document.querySelector(".pageBtn");
let pageMenu = document.querySelector(".pageMenu");

window.onscroll = function () {
    if (window.scrollY >= 300) {
        btn.style.display = "flex";
        navBar.style.cssText = "box-shadow: 0px 3px 10px #B0B9AE";
        pageMenu.classList.remove("active");


    } else {
        btn.style.display = "none";
        navBar.style.cssText = "box-shadow: 0px 0px 0px #fff";
    }
}

btn.onclick = function () {
    window.scrollTo(
        { top: 0, left: 0, behavior: "smooth" }
    );
};


pageBtn.onclick = function () {
    pageMenu.classList.toggle("active");
}
let navbar = document.querySelector('#menu-btn');

navbar.onclick = () => {
    document.querySelector(".navbar").classList.toggle('active');
}


let previousBtn = document.querySelector("#previous");
let nextBtn = document.querySelector("#next");

let nextIndex = 1;
nextBtn.onclick = () => {
    if(nextIndex ===  1){س
        nextIndex++;
        document.querySelector(".home-header").style.cssText =
        "background: linear-gradient(rgba(136, 180, 78, .7), rgba(136, 180, 78, .7)), url(images/carousel-2.jpg) center center no-repeat;background-size: cover;";
    }else{
        nextIndex--;
        document.querySelector(".home-header").style.cssText =
        "background: linear-gradient(rgba(136, 180, 78, .7), rgba(136, 180, 78, .7)), url(images/carousel-1.jpg) center center no-repeat;background-size: cover;";
    }
};

previousBtn.onclick = () => {
    if(nextIndex ===  2){
        nextIndex--;
        document.querySelector(".home-header").style.cssText =
        "background: linear-gradient(rgba(136, 180, 78, .7), rgba(136, 180, 78, .7)), url(images/carousel-1.jpg) center center no-repeat;background-size: cover;";
    }else{
        nextIndex++;
        document.querySelector(".home-header").style.cssText =
        "background: linear-gradient(rgba(136, 180, 78, .7), rgba(136, 180, 78, .7)), url(images/carousel-2.jpg) center center no-repeat;background-size: cover;";
    }
  
  };
  