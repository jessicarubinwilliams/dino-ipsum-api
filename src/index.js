import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './dino-service.js';
import Translation from './translator.js';

$("#formOne").submit(function() {
  event.preventDefault();
  const text = $("#inputtedText").val();
  const words = Translation.counter(text);
  let promise = DinoService.getDinos(words);
  promise.then(function(response) {
    const body = JSON.parse(response);
    console.log(body);
    $("#showDinos").text(Translation.translator(text, body));
  }, function(error) {
    $(".showErrors").text(`A comet wiped out your dinosaurs. The comet says" ${error}`);
  });
});