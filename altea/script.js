const mobile = window.matchMedia("(max-width: 768px)");
const img = document.getElementById("center");

function handleScreen(e) {
  img.src = e.matches
    ? "./images/2zEYhy.jpeg"
    : "./images/ecxI3y.jpeg";
}

handleScreen(mobile);

mobile.addEventListener("change", handleScreen);