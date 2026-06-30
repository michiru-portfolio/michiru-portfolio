const profile = document.querySelector(".profile");

window.addEventListener("scroll", () => {

    const position = profile.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if(position < screen - 150){

        profile.classList.add("show");

    }

});