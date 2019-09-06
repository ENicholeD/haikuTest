import { HaikuChecker } from './haiku.js';
import $ from 'jquery';
import './styles.css';


$(document).ready(function(){
  $("#haiku").submit(function(event){
    event.preventDefault();
    let first = $("#first").val();
    let check = new HaikuChecker(first);
    let showThis = check.vowelCount();
    $("#result").append("<li>"+showThis+"</li>");
    // let second = $("#second").val();
    // let third = $("#third").val();
  });
});
