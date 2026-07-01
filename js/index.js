// ===============================
// Welcome Book
// ===============================

const overlay = document.getElementById("overlay");
const hero = document.getElementById("hero");
const book = document.getElementById("book");

if (book && overlay && hero) {
    book.addEventListener("click", () => {

        overlay.classList.add("hide");

        setTimeout(() => {
            hero.classList.add("show");
        }, 1000);

    });
}