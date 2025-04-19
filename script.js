
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-Q2PLK4WN1Q');

const wrappers = document.querySelectorAll(".image-wrapper");

wrappers.forEach(wrapper => {
  const image = wrapper.querySelector(".image-inner");

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    image.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    image.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});




const thumbs = document.querySelectorAll('.thumb');
const mainDisplay = document.getElementById('mainDisplay');
const selectedHPDisplay = document.getElementById('selectedHP');
const car2NameDisplay = document.getElementById('car2Name');
let selectedHP = 480;
let selectedCarName = "Mercedes";

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    if (mainDisplay.src !== img.src) {
      mainDisplay.classList.remove('fade');
      void mainDisplay.offsetWidth;
      mainDisplay.src = img.src;
      mainDisplay.classList.add('fade');
    }

    selectedHP = parseInt(img.dataset.hp);
    selectedCarName = img.getAttribute("name") || "Car 2";

    selectedHPDisplay.innerText = selectedHP;
    car2NameDisplay.innerText = selectedCarName;

    thumbs.forEach(i => i.classList.remove('selected'));
    img.classList.add('selected');
  });
});

selectedHPDisplay.innerText = selectedHP;
car2NameDisplay.innerText = selectedCarName;

function scrollThumbs(direction) {
  const wrapper = document.getElementById('thumbsWrapper');
  const scrollAmount = 100 * direction;
  wrapper.scrollBy({ top: scrollAmount, behavior: 'smooth' });
}

function startRace() {
  const bmwHP = parseInt(document.getElementById('bmwHP').innerText);

  document.getElementById('raceTrack').style.display = 'block';
  document.querySelector('.box img').classList.add('shake');
  document.querySelector('.display-area img').classList.add('shake');

  const line = document.getElementById('line');
  line.style.animation = 'none';
  void line.offsetWidth;
  line.style.animation = 'move 3s linear forwards';

  document.getElementById('result').innerText = '';

  setTimeout(() => {
    let winner = '';
    const popup = document.getElementById('winnerPopup');

    if (bmwHP > selectedHP) {
      winner = '🏆(Your BMW M4) Wins!';
    } else if (bmwHP < selectedHP) {
      winner = `🏎️(${selectedCarName}) Wins!`;
    } else {
      winner = "🤝 It's a Tie!";
    }

    document.querySelector('.box img').classList.remove('shake');
    document.querySelector('.display-area img').classList.remove('shake');

    document.getElementById('popupText').innerText = winner;
    popup.classList.remove('hidden');
  }, 2000);
}

function closePopup() {
  document.getElementById('winnerPopup').classList.add('hidden');
}

mainDisplay.onload = () => {
  mainDisplay.classList.add('fade-loaded');
  setTimeout(() => {
    mainDisplay.classList.remove('fade-loaded');
  }, 500);
};


let currentStage = 0;

function tuneBMW() {
  const bmwHPDisplay = document.getElementById('bmwHP');
  const bmwTuneBtn = document.getElementById('bmwTuneBtn');
  const stagePopup = document.getElementById('stagePopup');
  const popupText = document.getElementById('stagePopupText');

  if (currentStage >= 3) return; // Already maxed out

  currentStage += 1;

  // Update HP per stage
  let newHP = 503;
  if (currentStage === 1) {
    newHP = 700;
    const engineSound = document.getElementById('engineSound');
    engineSound.currentTime = 0; // restart from beginning
    engineSound.play();
    engineSound.volume = 0.5; // play sound at 50% volume
    setTimeout(() => {
      engineSound.pause(); // pause after 2 seconds
    }, 2000); // 2 seconds delay
  }
  else if (currentStage === 2) {
    newHP = 950;
    const engineSound = document.getElementById('engineSound');
    engineSound.currentTime = 0; // restart from beginning
    engineSound.play();
    engineSound.volume = 0.5; // play sound at 50% volume
    setTimeout(() => {
      engineSound.pause(); // pause after 2 seconds
    }, 2000); // 2 seconds delay
  }
  else if (currentStage === 3) {
    newHP = 1200;
    const engineSound = document.getElementById('engineSound');
    engineSound.currentTime = 0; // restart from beginning
    engineSound.play();
    engineSound.volume = 0.5; // play sound at 50% volume
    setTimeout(() => {
      engineSound.pause(); // pause after 2 seconds
    }, 2000); // 2 seconds delay
  }
  bmwHPDisplay.innerText = newHP;

  // Update Button Text
  bmwTuneBtn.innerText = `Stage ${currentStage} BMW`;

  // Show popup
  popupText.innerText = `🚀 Stage ${currentStage} Tune Applied!`;
  stagePopup.classList.remove('hidden');
  stagePopup.classList.add('show');

  setTimeout(() => {
    stagePopup.classList.remove('show');
    stagePopup.classList.add('hidden');
  }, 2000);
}

