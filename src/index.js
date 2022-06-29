import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WowRequest from './wow-request.js';
import AnimalRequest from './animal-request.js';


function getElementsWow(response){
  let movieImage = response[0].poster;
  let wowVid = response[0].video['360p'];
  let totalWows = response[0].total_wows_in_movie;
  let wowNum = response[0].current_wow_in_movie;
  $('#wowVid').html(`<video width="320" height="240" controls><source src="${wowVid}" type="video/mp4"></video>`);
  $('#movieIMG').html(`<img src="${movieImage}" class="card-img-top">`);
  $('#totalWows').text(totalWows);
  $('#wowNum').text(wowNum);
}

function getElementsAnimal(response) {
  let animalArray = response;
  animalArray.forEach(function(animal){
    $('#animalRow').append(
      `<div class="col-4">
        <div class="card animalCard" style="width: 300px">
          <img class="animalIMG" src="${animal.image_link}">
          <h5>${animal.name}</h5>
          <p>Animal Type: ${animal.animal_type}</p>
          <div class="animalType1"></div>
        </div>
      </div>`
    )
  });
}

async function makeWowApiCall(){
  const response = await WowRequest.getWow();
  getElementsWow(response);
}

async function makeAnimalApiCall(animal){
  const response = await AnimalRequest.getAnimal(animal);
  getElementsAnimal(response);
}

$(document).ready(function(){
  makeWowApiCall();
});

$('.btn-primary').click(function() {
  makeWowApiCall();
});

$('form#animalChecker').submit(function(event) {
  event.preventDefault();
  let animalType = $('#animalType').val();
  console.log(animalType);
  makeAnimalApiCall(animalType);
});