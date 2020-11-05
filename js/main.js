var user = prompt("Enter your name please")
function storeInArray() {

  let names = []
  var inputmessage = document.getElementById('txtBox').value;
  names.push(inputmessage)
  for(var i=0; i<names.length;i++)
  {
    if(inputmessage !== "" && inputmessage !== " ")
    {
      document.getElementById('result').innerHTML +="<br>" + user + ": " + names[i] + "<br>"
    }
    else {
      alert("You have to fill this form")
    }
  }
document.getElementById('txtBox').value = ""
}

var t = setInterval(function(){timer()}, 1000)
//
function timer() {
  var d = new Date()
  document.getElementById('timer').innerHTML = d.toLocaleTimeString()
}
var timerState = true

function pauseTimer(btn) {
  if(timerState)
  {
      btn.value = 'Play'
      timerState = false
      clearInterval(t)

  }
  else {
    btn.value = 'Pause'
    timerState = true
    t = setInterval(function(){timer()}, 1000)
  }
}

function toStartWrittingText() {
  var myText = setInterval(function(){
    document.getElementById("parag").innerHTML += "Hello "
  },100)
}










