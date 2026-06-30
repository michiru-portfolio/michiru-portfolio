const profile = document.querySelector(".profile");

window.addEventListener("scroll", () => {

    const position = profile.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if(position < screen - 150){

        profile.classList.add("show");

    }

});

const nextBtn = document.querySelector(".next-btn");

if (nextBtn) {

    nextBtn.addEventListener("click", function(event){
        
        // すぐページ移動しないようにする
        event.preventDefault();

        // リンク先を取得
        const url = this.href;

        //　メッセージ表示
        document.getElementById("transition-message").classList.add("show");

        // bodyにfade-outを付ける
        document.body.classList.add("fade-out");

        // 0.8秒後にページ移動
        setTimeout(() => {

            window.location.href = url;

        },1500);

    });

}