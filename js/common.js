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


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});

// ===============================
// Header
// ===============================

fetch("components/header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header").innerHTML = data;

});

// ===============================
// Footer
// ===============================

fetch("components/footer.html")
.then(response => response.text())
.then(data => {

    document.getElementById("footer").innerHTML = data;

});