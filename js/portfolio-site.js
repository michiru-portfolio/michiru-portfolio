// =========================
// 本を閉じる演出
// =========================

const closeBook = document.querySelector(".close-book");

if(closeBook){

    closeBook.addEventListener("click",function(event){

        event.preventDefault();

        const url = this.href;

        // メッセージ表示
        document
            .getElementById("transition-message")
            .classList.add("show");

        // 暗転
        document.body.classList.add("fade-out");

        // 1.8秒後に戻る
        setTimeout(()=>{

            window.location.href = url;

        },1800);

    });

}