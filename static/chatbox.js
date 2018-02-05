function message(){
  var userInput = document.getElementById('user').value;



  var userOutput = "<br>" + "User: " + userInput + "<br>";
  var bMessage = botMesage(userInput);
  var botOutput = "<br>" + "Bot: " + bMessage + "<br>";


  document.getElementById('chatSpace').innerHTML += userOutput + botOutput;
}

function botMesage(bInput){
  return "Ok";
}

function updateScroll(){
    var element = document.getElementById("chatSpace");
    element.scrollTop = element.scrollHeight;
}


function enter(){
  var uInp = document.getElementById('user');
  uInp.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
      message();
    }
  });
}
