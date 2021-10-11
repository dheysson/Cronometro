window.onload = function(){
  var seconds = 00;
  var tens = 00;
  var btnStart = document.getElementById('button-start');
  var btnStop = document.getElementById('button-stop');
  var btnReset = document.getElementById('button-reset');
  var appendSeconds = document.getElementById('seconds');
  var appendTens = document.getElementById('tens');
  var Interval;
  var isStarted;

  btnStart.onclick = function(){
    if(!isStarted){
      Interval = setInterval(startTimer,10);
      btnStart.innerHTML = "começou!";
      isStarted = true;
    }
  }

  btnStop.onclick = function(){
    btnStart.innerHTML = "começar";
    isStarted = false;
    clearInterval(Interval);
  }

  btnReset.onclick = function(){
    isStarted = false;
    btnStart.innerHTML = "começar";
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
    clearInterval(Interval);
  }

  function startTimer(){
    tens++;

    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
      appendTens.innerHTML = tens;
    }
    if(tens > 99){
      tens = 00;
      seconds++;
      appendTens.innerHTML = tens;
    }
    if(seconds <= 9){
      appendSeconds.innerHTML = "0" + seconds;
    }
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }
}