
const roles = [
    "AI Engineer",
    "Full-Stack Developer",
    "Generative AI Enthusiast",
    "FastAPI Specialist",
    "Chatbot Developer",
    "Tech Innovator"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledRoles = shuffleArray([...roles]);

new Typed("#typed-text", {
    strings: shuffledRoles,
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
    } else {
    scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
});
