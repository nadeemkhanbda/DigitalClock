setInterval(function() {
  let today = new Date();
  let hr, mnt, sec;
  hr = today.getHours();
  mnt = today.getMinutes();
  sec = today.getSeconds();
  
  hour = () =>{
     if (hr > 12 ){
      hr -= 12;
      return `${hr}`;
    }
     if (hr < 10){
      return `0${hr}`;
    }
    if (hr == 0){
      return `${hr}`;
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
    document.getElementById("meridian").innerHTML = "AM";
  }
document.getElementById("clock").innerHTML = hour() + ":" + minut() + ":" + seconds();
}, 1000);


let date = new Date();
let day = date.getDate();
let month = date.getMonth() +1;
let year =date.getFullYear();
document.getElementById("date").innerHTML = `${day} / ${month} / ${year}`;




