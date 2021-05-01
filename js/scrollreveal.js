var derecha ={
    distance: '100%',
    origin: 'left',
    duration:800,
    delay:300
}

var izquierda ={
    distance: '100%',
    origin: 'right',
    duration:800,
    delay:300
}

ScrollReveal().reveal('#derecha',derecha);
ScrollReveal().reveal('#izquierda',izquierda);
ScrollReveal().reveal('footer',{duration:1200})