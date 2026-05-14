// const mobile = window.matchMedia("(max-width: 768px)");
// const img = document.getElementById("center");

// function handleScreen(e) {
//   img.src = e.matches
//     ? "./images/2zEYhy.jpeg"
//     : "./images/ecxI3y.jpeg";
// }

// handleScreen(mobile);

// mobile.addEventListener("change", handleScreen);

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