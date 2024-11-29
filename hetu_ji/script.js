let currentPhoto = 0;
const totalPhotos = 10;
const photos = [
    'IMG-20241031-WA0004.jpg', 'IMG-20241031-WA0009.jpg', 'IMG-20241105-WA0002.jpg', 'IMG-20241105-WA0003.jpg',
    'IMG-20241105-WA0004.jpg', 'IMG-20241105-WA0005.jpg', 'IMG-20241031-WA0006.jpg', 'IMG-20241031-WA0007.jpg',
    'IMG-20241031-WA0008.jpg', 'WhatsApp Image 2024-11-05 at 10.37.53_4357990b.jpg'
];

const songs = [
    'music/Arijit Singh - Kasturi Song Whatsapp Status _ Black Screen Lyrics Status _ New Song 2024 _ Love Song [ ezmp3.cc ].mp3',
    'music/Dhokha Dhadi WhatsApp Status 😍 Love Song WhatsApp Status Video 😘 New Song WhatsApp Status Video [ ezmp3.cc ].mp3',
    'music/💞Tu Hai To Mujhe Phir Aur Kya Chahiye - Whatsapp Status✨ _ Arijit Singh _ Love Status [ ezmp3.cc ].mp3',
    'music/mere dil me jagah khuda ki khali thi lyrics status black screen 💯 [ ezmp3.cc ].mp3',
    'music/ye teri hasi par main mar hi na jau (status) @FukraInsaanand@triggeredinsaan [ ezmp3.cc ].mp3',
    'music/Tere Naino Mein Maine Nahi Sara Jaha🦋__Lofi ~ Reverd 💗__Love status 🌻__WhatsApp status 🥀 [ ezmp3.cc ].mp3',
    'music/Tera nasha ft. bilz & kashif _ Whatsapp status [ ezmp3.cc ].mp3',
    'music/__Thodi thodi katthai si uski aakhe__WhatsApp status [ ezmp3.cc ].mp3',
    'music/rani.mp3',
    'music/Arijit Singh - Kasturi Song Whatsapp Status _ Black Screen Lyrics Status _ New Song 2024 _ Love Song [ ezmp3.cc ].mp3'
];

function switchPhotos() {
    // Hide current photo
    const currentPhotoElement = document.getElementById(`photo${currentPhoto + 1}`);
    currentPhotoElement.style.opacity = 0;
    currentPhotoElement.style.transform = 'scale(1.5)';

    // Update the photo index
    currentPhoto = (currentPhoto + 1) % totalPhotos;

    // Show the new photo
    setTimeout(() => {
        const newPhotoElement = document.getElementById(`photo${currentPhoto + 1}`);
        newPhotoElement.style.opacity = 1;
        newPhotoElement.style.transform = 'scale(1)';

        // Update the background song
        const audioElement = document.getElementById('backgroundAudio');
        audioElement.src = songs[currentPhoto];
        audioElement.load(); // Reload and play the new song
        audioElement.play();
    }, 1000); // Transition time
}

document.addEventListener("scroll", () => {
    const body = document.body;
    const scrollPosition = window.scrollY;

    // Adjust threshold as per your design needs
    const threshold = window.innerHeight;

    if (scrollPosition > threshold) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});


gsap.from(".img1", {
    x: 600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 70%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img2", {
    x: 600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 65%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img3", {
    x: 600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 60%",
        end: "top 00%",
        scrub: 1,
    }
})
gsap.from(".img4", {
    x: 600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 55%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img5", {
    x: 600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img6", {
    x: -600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 70%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img7", {
    x: -600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',

        start: "top 65%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img8", {
    x: -600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 60%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img9", {
    x: -600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 65%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img10", {
    x: -600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 70%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img11", {
    x: -600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 70%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".img12", {
    x: -600,
    y: 250,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        start: "top 70%",
        end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".line", {
    width: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.line',
        scroller: 'body',
        start: "top 100%",
        end: "top 0%",
        scrub: 1,
    }
})

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
        gsap.from(".photo-container", {
            scrollTrigger: {
                trigger: ".photo-container",
                start: "top 60%",
                end: "bottom 10%",
                scrub: true,
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    },

    "(min-width: 768px) and (max-width: 1023px)": function () {
        gsap.from(".photo-container", {
            scrollTrigger: {
                trigger: ".photo-container",
                start: "top 45%",
                end: "bottom 20%",
                scrub: true,
            },
            opacity: 0,
            y: 30,
            duration: 1,
        });
    },

    "(max-width: 767px)": function () {
        gsap.from(".photo-container", {
            scrollTrigger: {
                trigger: ".photo-container",
                start: "top 30%",
                end: "bottom 30%",
                scrub: true,
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
        });
    },
});
