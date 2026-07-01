// ===============================
// Gallery Lightbox
// ===============================

const cards=document.querySelectorAll(".art-card");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

cards.forEach(card=>{

card.addEventListener("click",()=>{

const img=card.querySelector("img");

lightboxImg.src=img.src;

lightbox.style.display="flex";

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});