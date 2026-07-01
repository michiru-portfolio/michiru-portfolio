const books = document.querySelectorAll(".book-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

books.forEach(book=>{

    observer.observe(book);

});

// =========================
// 本を開く演出
// =========================

const openButtons = document.querySelectorAll(".open-book");

openButtons.forEach(button => {

    button.addEventListener("click", function(event){

        event.preventDefault();

        const url = this.href;

        document
            .getElementById("transition-message")
            .classList.add("show");

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = url;

        },1800);

    });

});

// =========================
// Galleryへ移動
// =========================

const nextBtn = document.querySelector(".next-btn");

if(nextBtn){

    nextBtn.addEventListener("click", function(event){

        event.preventDefault();

        const url = this.href;

        document
            .getElementById("transition-message")
            .classList.add("show");

        document.body.classList.add("fade-out");

        setTimeout(()=>{

            window.location.href = url;

        },1800);

    });

}