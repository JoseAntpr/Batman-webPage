document.getElementById("video-batman").addEventListener("click",function(event){
  launchFullScreen(this);
  this.play()

});

function launchFullScreen(element){
  if(element.requesFullScreen){
    element.requesFullScreen();
  }else if(element.mozRequestFullScreen){
    element.mozRequestFullScreen();
  }else if(element.webkitRequestFullScreen){
    element.webkitRequestFullScreen();
  }else if(element.msRequestFullscreen){
    element.msRequestFullscreen();
  }

}

function exitFullScreen(){
  if(element.exitFullScreen){
    element.requesFullScreen();
  }else if(element.mozCancelFullScreen){
    element.mozRequestFullScreen();
  }else if(element.webkitExitFullScreen){
    element.webkitRequestFullScreen();
  }else if(element.msExitFullscreen){
    element.msRequestFullscreen();
  }

}
