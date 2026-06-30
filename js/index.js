const book = document.getElementById("book");
const overlay = document.getElementById("overlay");
const hero = document.getElementById("hero");

book.addEventListener("click", () => {

    book.style.transform = "rotateY(160deg)";

    setTimeout(() => {

        overlay.style.opacity = "0";

        setTimeout(() => {

            overlay.style.display = "none";

            hero.classList.add("show");

            document.body.style.overflow = "auto";

        },1000);

    },700);

});