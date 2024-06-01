let mapOptions={
    center:[31.97543, 35.85977],
    zoom:10
}

// creating a map 

let map=new L.map('map',mapOptions);
let layer =new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);