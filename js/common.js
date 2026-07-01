// ===============================
// Michiru's Mansion
// Common JavaScript
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

    setupTransition();

});


function setupTransition(){

    const links=document.querySelectorAll(".transition-link");

    links.forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const url=this.href;

            const message=this.dataset.message;

            const icon=this.dataset.icon;

            document.getElementById("transition-text").textContent=message;

            document.getElementById("transition-icon").textContent=icon;

            document
                .getElementById("transition-message")
                .classList.add("show");

            document.body.classList.add("fade-out");

            setTimeout(()=>{

                window.location.href=url;

            },1800);

        });

    });

}