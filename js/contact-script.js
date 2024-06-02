let mapOptions={
    center:[31.97543, 35.85977],
    zoom:10
}

// creating a map 

let map=new L.map('map',mapOptions);
let layer =new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


let name =document.querySelector(".form .form-box #name");
let email =document.querySelector(".form .form-box #email");
let subject =document.querySelector(".form .form-box #subject");
let message =document.querySelector(".form .form-box #message");


function submitBtn(){

   if(name.value && email.value && subject.value && message.value !==""){
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Thanks ${name.value} , we will contact you soon at` ,
        showConfirmButton: false,
        timer: 15000
    });
    name.value ="";
    email.value="";
    subject.value="";
    message.value="";
   }else
   {
    Swal.fire({
        position: "top-center",
        icon: "error",
        title: `please fill the empty feilds` ,
        showConfirmButton: false,
        timer: 15000
    });
   }
    }