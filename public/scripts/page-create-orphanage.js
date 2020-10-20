var	mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1})


//create map
const map = L.map('mapid', {
  layers: grayscale}).setView([-16.6817445,-49.2562558], 15);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', function(event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker)

  // add icon layer
  marker = L.marker([lat, lng], {icon})
            .addTo(map);

});

// adicionar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector('#images');
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload');
  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[(fieldsContainer.length) - 1].cloneNode(true);
  //verificar se o campo está vazio se sim não adicionar novo container
  if (newFieldContainer.children[0].value == ""){
    return;
  }
  //limpar o campo antes de adicionar
  newFieldContainer.children[0].value = "";
  //adiocionar o clone ao container de #images
  container.appendChild(newFieldContainer);

}

function deleteField(event){
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll('.new-upload');

  if(fieldsContainer.length <= 1){
    //Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//seleção do sim e não
function toggleSelect(event){
  // retiar a classe active dos botoes
  document.querySelectorAll('.button-select button')
          .forEach(button => button.classList.remove('active'))
  // colocar a classe active no botão escolhido
  const button = event.currentTarget;
  button.classList.add('active');
  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}

// checar se foi adicionado alguma localização ao salvar
function validateForm(){
  // pega latitude e longitude
  const lat = document.querySelector('[name=lat]').value;
  const lng = document.querySelector('[name=lng]').value;
  const btnConfirmar = document.querySelector('.primary-button');


  // verifica se tem latitude e longitude
  const warning = document.querySelector('.warnings');
  if(lat != "" || lng != ""){
    warning.style.marginTop = "0rem";
    warning.style.marginBotton = "0rem";
    warning.children[0].hidden = true;
    btnConfirmar.style.marginTop = "6.4rem";
    return true;
  }
  //remove margem do botão confirmar e adiciona no warnings
  btnConfirmar.style.marginTop = "0rem";
  warning.style.marginTop = "3.2rem";
  warning.style.marginBottom = "3.2rem";
  warning.children[0].innerHTML = "* É necessário adicionar uma localização no mapa.";
  warning.children[0].hidden = false;

  return false;
}