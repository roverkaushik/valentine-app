const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

let musicStarted = false;

function playMusic() {
    if (!musicStarted) {
        const music = document.getElementById("bgMusic");
        music.volume = 0.5;

        music.play()
            .then(() => {
                musicStarted = true;
            })
            .catch(err => {
                console.log("Music blocked until user interaction");
            });
    }
}


// NO button escape (mouse + touch)
function moveNoButton() {
    playMusic();

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton); // 👈 important

function sayYes() {
    playMusic(); // 👈 guaranteed user click
    document.getElementById("result").classList.remove("hidden");
    startHearts();
}

// 💕 Floating hearts after YES
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
