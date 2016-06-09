/*This file is for your custom js.  All yours*/


$(document).ready(function(){

  $("#user-number").submit(function(event){
    event.preventDefault();
    var userNumber = $("#arabic-numeral").val();

    var output = romanNumeral(userNumber);

    $('#output').text(output);
  });
});
