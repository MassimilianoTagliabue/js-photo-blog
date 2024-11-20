
const cardElem = document.getElementById("card");
const btnOverlay = document.querySelector(".btn-close-ms");
const overlayElem = document.querySelector(".overlay-ms");
console.log(overlayElem.classList);

console.log(btnOverlay);
//overlayElem.classList.add("d-none");

let text = "";

generaCard(text);




btnOverlay.addEventListener("click", () =>{

    overlayElem.classList.add("d-none");
} )
