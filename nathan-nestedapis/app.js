

$(document).ready(function() {
$.ajax({
 url: 'https://randomuser.me/api/',
 dataType: 'json',
 success: function(data) {
   // console.log(data.results[0].name.first
   // );
   var userFirstName = data.results[0].name.first;
   console.log(userFirstName);
   $('h1').append(userFirstName);
   var lName = data.results[0].name.last;
   console.log(lName);
   $('h2').append(lName);
    var userCountryCode = data.results[0].nat
    console.log(userCountryCode);
    // $('h3').append(userCountryCode)
    $.ajax({
   url: 'https://restcountries.eu/rest/v2/alpha/' + userCountryCode,
   dataType:'json',
   success: function(data) {
       console.log(data.name) 
       var country = data.name;
       $("body").append('<h1>'+country+ '</h1>');
   }
    })
 }})})
