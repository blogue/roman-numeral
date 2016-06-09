/*This file is for your custom js.  All yours*/
var romanNumeral = function(integer){
  if (integer >= 4000) {
    return false;
  }

  var string = integer.toString();
  var array = string.split();
  var reverseArray = array.reverse();
  debugger;
  if (reverseArray[0] === "0") {
    reverseArray[0] = "";
  } else if (reverseArray[0] === "1") {
    reverseArray[0] = "I";
  } else if (reverseArray[0] === "2") {
    reverseArray[0] = "II";
  } else if (reverseArray[0] === "3") {
    reverseArray[0] = "III";
  } else if (reverseArray[0] === "4") {
    reverseArray[0] = "IV";
  } else if (reverseArray[0] === "5") {
    reverseArray[0] = "V";
  } else if (reverseArray[0] === "6") {
    reverseArray[0] = "VI";
  } else if (reverseArray[0] === "7") {
    reverseArray[0] = "VII";
  } else if (reverseArray[0] === "8") {
    reverseArray[0] = "VIII";
  } else if (reverseArray[0] === "9") {
    reverseArray[0] = "IX";
  }

  var output = reverseArray.join("");
  return output;
}

$(document).ready(function(){

  $("#user-number").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#arabic-numeral").val());

    var output = romanNumeral(userNumber);

    $('#output').text(output);
  });
});
