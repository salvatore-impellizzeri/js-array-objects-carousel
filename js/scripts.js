const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        
    // }, {
    //     image: 'img/02.webp',
    //     title: 'Ratchet & Clank: Rift Apart',
    //     text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    // }, {
    //     image: 'img/03.webp',
    //     title: 'Fortnite',
    //     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    // }, {
    //     image: 'img/04.webp',
    //     title: 'Stray',
    //     text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    // }, {
    //     image: 'img/05.webp',
    //     title: "Marvel's Avengers",
    //     text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (let i = 0; i < images.length; i++) {
    
    if (i == 0) {
        items.innerHTML += `
        <div class="image-container active">
            <img src="${images[i].image}">
            <div class="image-info text-white">
                <div class="image-title">
                    ${images[i].title}
                </div>
                <div class="image-text">
                    ${images[i].text}
                </div>
            </div>
        </div>
    `    
    } else {
        items.innerHTML += `
        <div class="image-container">
            <img src="${images[i].image}">
            <div class="image-info text-white">
                <div class="image-title">
                    ${images[i].title}
                </div>
                <div class="image-text">
                    ${images[i].text}
                </div>
            </div>
        </div>
    `    
    }
}

// FUNZIONI

function slideRight(){



}

const container = document.getElementById("main-container");
const item = document.getElementById("items");
const next = document.getElementById("right");
const prev = document.getElementById("left");

let activeItem = 0;

next.addEventListener("click",
    function(){
        if(activeItem < images.length - 1){
            item[activeItem].classList.remove("active");

            activeItem++;

            item[activeItem].classList.add("active");
        }

        else if (activeItem == imageCarousel.length - 1) {
            item[activeItem].classList.remove("active");

            activeItem = 0;

            item[activeItem].classList.add("active");
        }
    }

)

prev.addEventListener("click",
    function(){
        if(activeItem > 0){
            item[activeItem].classList.remove("active");

            activeItem--;

            item[activeItem].classList.add("active");
        }

        else if (activeItem == images.length - 1) {
            item[activeItem].classList.remove("active");

            activeItem = 0;

            item[activeItem].classList.add("active");
        }
    }
)

buttonRight.addEventListener("click", slideRight)