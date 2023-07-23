setInterval(function() {
  let today = new Date();
  let hr, mnt, sec, am, pm;
  hr = today.getHours();
  mnt = today.getMinutes();
  sec = today.getSeconds();
  
  hour = () =>{
     if (hr > 12 || hr < 10){
      hr -= 12;
      return `0${hr}`;
    }
    else if (hr == 0){
      return hr = 12;
    }
    else {
      return hr;
    }
    
  }
  minut = () => {
    if (mnt < 10) {
      return `0${mnt}`;
    }
    else {
      return mnt;
    }
  }
  seconds = () => {
    if (sec < 10) {
      return `0${sec}`;
    }
    else {
      return sec;
    }
  }
  if ( hr > 12){
    document.getElementById("meridian").innerHTML = "PM";
  }
  else{
    document.getElementById("demo").innerHTML = "AM";
  }
document.getElementById("clock").innerHTML = hour() + ":" + minut() + ":" + seconds();
}, 1000);





