const imagens = [ 
    "./src/assets/img/img1.png",
    "./src/assets/img/img2.png",
    "./src/assets/img/img3.png",
    "./src/assets/img/img4.png"

];

let index = 0;

const slide = document.getElementById("slide");

setInterval(() => {

    slide.src = imagens[index];

    index++;

    if(index >= imagens.length){
        index = 0;
    }
    
}, 4500);