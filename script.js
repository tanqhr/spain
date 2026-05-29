const scrollBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display = "flex";
        scrollBtn.style.justifyContent = "center";
        scrollBtn.style.alignItems = "center";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

 if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
            .then(() => console.log("PWA ready"))
            .catch(err => console.log(err));
        }