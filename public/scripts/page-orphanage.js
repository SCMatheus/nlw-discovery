	var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	var grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1})



const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
  layers: grayscale
}
//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;
//create map
const map = L.map('mapid', options).setView([lat,lng], 15);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170,2]
});


//create and add marker
L
.marker([lat,lng], {icon})
.addTo(map);


/* image gallery */

function selectImage(event){
  const button = event.currentTarget;

  //remover todas as classes actives
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(button => {
    button.classList.remove("active");
  });
  // selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  // atualizar o container de image
  imageContainer.src = image.src;

  // adicionar a classe .active para o botao clicado
  button.classList.add("active")
}