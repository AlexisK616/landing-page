
function scrollProgressBar(){
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let ClientHeight = document.documentElement.clientHeight;

   let windowHeight = scrollHeight - ClientHeight;
   let porcentaje = scrollTop / windowHeight * 100;

   document.getElementById("progress-bar").style.width = porcentaje+"%";
}

window.addEventListener('scroll',scrollProgressBar);