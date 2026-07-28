// ===============================
// SIMA HOTEL ROOM SERVICE
// ===============================


// ===============================
// Reveal Animation
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "flex";
            topBtn.style.alignItems = "center";
            topBtn.style.justifyContent = "center";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


// ===============================
// Hero Button Smooth Scroll
// ===============================

const menuButton = document.querySelector('.primary');

if(menuButton){

    menuButton.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector("#menu").scrollIntoView({

            behavior:"smooth"

        });

    });

}


// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){

            loader.classList.add("hide");

        }

    },1800);

});


// ===============================
// SWIPER DIGITAL MENU
// ===============================

const swiper = new Swiper(".menuSwiper", {

    loop:false,

    slidesPerView:1,

    spaceBetween:30,

    grabCursor:true,

    touchRatio:1,

    simulateTouch:true,

    allowTouchMove:true,

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

});
