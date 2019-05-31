import { Age } from './age-calc';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userDate = $("#birthDate").val();
    let date = new Date(userDate);
    let health = $('input:radio[name=health]:checked').val();
    let intelligence = $('input:radio[name=intelligence]:checked').val();
    let userAge = new Age(date, health, intelligence);
    console.log(userAge);


  })
})
