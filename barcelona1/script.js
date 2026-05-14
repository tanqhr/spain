const favicon = document.getElementById("favicon");

const frames = [
    "./favicon/favicon6.png",
     "./favicon/favicon5.png",
    "./favicon/favicon7.png",
    "./favicon/favicon8.png"
   
];

let i = 0;

function animateFavicon(){

    favicon.href = frames[i];

    i = (i + 1) % frames.length;

    setTimeout(animateFavicon, 900);
}

animateFavicon();