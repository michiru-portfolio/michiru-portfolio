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

const enterBtn = document.querySelector(".enter-btn");

enterBtn.addEventListener("click", function(event){

    // すぐページ移動しないようにする
    event.preventDefault();

    // リンク先を取得
    const url = this.href;

    // bodyにfade-outを付ける
    document.body.classList.add("fade-out");

    // 0.8秒後にページ移動
    setTimeout(function(){

        window.location.href = url;

    },800);

});