import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './dino-service.js';

$("#formOne").submit(function() {
  event.preventDefault();
  const words = $("#inputtedWords").val();
  const paragraphs = $("#inputtedParagraphs").val();
  let promise = DinoService.getDinos(words, paragraphs);
  promise.then(function(response) {
    const body = JSON.parse(response);
    $("#showDinos").text(body);
  }, function(error) {
    $(".showErrors").text(`A comet wiped out your dinosaurs. The comet says" ${error}`);
  });
});