const favicon = document.getElementById("favicon");

const frames = [
    "./favicon/favicon1.png",
    "./favicon/favicon2.png",
    "./favicon/favicon3.png",
    "./favicon/favicon4.png"
];

let i = 0;

function animateFavicon(){

    favicon.href = frames[i];

    i = (i + 1) % frames.length;

    setTimeout(animateFavicon, 900);
}

animateFavicon();