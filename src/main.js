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

    $('#age-form').hide();
    $('#solution').append('<h3>Your age</h3>');
    $('#solution').append(`<li>On Earth, you are ${userAge.earthAge} years old.</li>`);
    $('#solution').append(`<li>On Mercury, you are ${userAge.mercuryAge} years old.</li>`);
    $('#solution').append(`<li>On Venus, you are ${userAge.venusAge} years old.</li>`);
    $('#solution').append(`<li>On Mars, you are ${userAge.marsAge} years old.</li>`);
    $('#solution').append(`<li>On Jupiter, you are ${userAge.jupiterAge}</li> years old.</li>`);
    $('#solution').append(`<li>Based on you answers, your life expectancy is ${userAge.lifeExpectancy} years old.</li>`);

    if (userAge.lifeExpectancy > userAge.earthAge) {
      $('#solution').append(`<li>You have ${userAge.lifeExpectancy - userAge.earthAge} years left to live.</li>`);
    } else if (userAge.lifeExpectancy === userAge.earthAge) {
      $('#solution').append(`<li>Your end is very near.</li>`);
    } else if (userAge.lifeExpectancy < userAge.earthAge) {
      $('#solution').append(`<li>You have lived ${userAge.earthAge - userAge.lifeExpectancy} years passed your life expectancy.</li>`);
    }
  })
})
