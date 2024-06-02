

let btn = document.querySelector(".floatingBtn");
let navBar = document.querySelector(".top");
let pageBtn = document.querySelector(".pageBtn");
let pageMenu = document.querySelector(".pageMenu");

pageMenu.onclick = function(){

}

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


btn.onclick = async function () {

    await window.scrollTo(
        { top: 0, left: 0, behavior: "smooth" }
    );
};

let boxContainer = document.querySelector(".product .box-container");

let productComponent = document.querySelector(".product .box-container .box");

let btnTest = document.querySelector(".viewButton .btn");

let p = document.querySelector(".product .box-container .box h3");

let productArray;
let copyProduct;

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(function (json) {
        productArray = json;
        return json
    });
    
function creat(display = "none") {
    let pr = productArray;
    console.log(pr);

    for (let index = 0; index < pr.length; index++) {
        copyProduct = productComponent.cloneNode(true);
        copyProduct.setAttribute("style", `display:${display}`);
        document.querySelector(".product .box-container .box img").setAttribute("src", pr[index]['image']);
        document.querySelector(".product .box-container .box h3").innerHTML = pr[index]['title'];
        document.querySelector(".product .box-container .box p").innerHTML = pr[index]['description'];
        document.querySelector(".product .box-container .box .price").innerHTML = `$${pr[index]['price']}`;
        boxContainer.appendChild(copyProduct);
    }
}
setTimeout(creat, 1000);

btnTest.onclick = function () {
    creat("block");
}


let navbar = document.querySelector('#menu-btn');

navbar.onclick = () => {
    document.querySelector(".navbar").classList.toggle('active');

}

