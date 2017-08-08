$(document).ready(function(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            var firstName = data.results[0].name.first;
            console.log(firstName);
            $("body").append(firstName);
            
            
        }
        });
});