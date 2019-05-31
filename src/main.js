import { Age } from './age-calc';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let birthDay = $('#birthDay').val();
    console.log(birthDay);
    let userDate = new Date(birthDay);
    let health = $('#health').val();
    let intelligence = $('#intelligence').val();
    let userAge = new Age(userDate, health, intelligence);
    console.log(userAge.earthAge);
  })
})
