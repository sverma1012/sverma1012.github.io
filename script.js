const navbar = document.querySelector('.rounded-navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Add the "scrolled" class when we scroll 50+ px
    navbar.classList.add('scrolled');
  } else {
    // Remove the class when we scroll back up
    navbar.classList.remove('scrolled');
  }
});

/*
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'linear-gradient(135deg, #dc7a34, #f5953b)';
    navbar.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.4)';
  } else {
    navbar.style.background = 'linear-gradient(135deg, #dc7a34, #f5953b)';
    navbar.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.4)';
  }
});
*/

const typingElement = document.getElementById('typing-animation');
const subtextElement = document.getElementById('subtext-animation');

// Texts to type out
const mainText = "Sneha Verma";
const subText = "Business Data and Strategy Specialist | MSFT-Certified Fabric Analytics Engineer";

// Typing config
const typingSpeed = 100;       // Speed of typing
const delayBetweenTexts = 500; // Delay before second text

let index = 0;
let subIndex = 0;

// 1) Initially reset elements, show cursor on main text only
typingElement.textContent = "";
subtextElement.textContent = "";
typingElement.classList.add("typing-cursor");
subtextElement.classList.remove("typing-cursor");
subtextElement.style.display = "none"; // Hidden until ready

// Function to type the main text
function typeMainText() {
  if (index < mainText.length) {
    typingElement.textContent += mainText.charAt(index);
    index++;
    setTimeout(typeMainText, typingSpeed);
  } else {
    // 2) Main text done, remove its cursor
    typingElement.classList.remove('typing-cursor');

    // 3) After delay, reset subtext & add cursor
    setTimeout(() => {
      subtextElement.style.display = "inline-block"; // or "block"
      subtextElement.textContent = "";
      subIndex = 0;
      subtextElement.classList.add('typing-cursor');
      typeSubText();
    }, delayBetweenTexts);
  }
}

// Function to type the subtext
function typeSubText() {
  if (subIndex < subText.length) {
    subtextElement.textContent += subText.charAt(subIndex);
    subIndex++;
    setTimeout(typeSubText, typingSpeed);
  } else {
    // Subtext done, remove cursor
    //subtextElement.classList.remove('typing-cursor'); THIS LINE REMOVES THE CURSOR AFTER IT'S DONE TYPING.
  }
}

// Start typing the main text
typeMainText();


// ------------------------------------------------
let currentIndex = 0;

function updateExperienceBoxes() {
  const boxes = document.querySelectorAll('.experience-box');
  boxes.forEach((box, index) => {
    box.classList.remove('active');
    if (index === currentIndex) {
      box.classList.add('active');
    } else if (index < currentIndex) {
      box.style.transform = 'translateX(-100%)';
    } else {
      box.style.transform = 'translateX(100%)';
    }
  });
}

function scrollLeft() {
  const boxes = document.querySelectorAll('.experience-box');
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = boxes.length - 1; // Loop back to the last box
  }
  updateExperienceBoxes();
}

function scrollRight() {
  const boxes = document.querySelectorAll('.experience-box');
  if (currentIndex < boxes.length - 1) {
    currentIndex += 1;
  } else {
    currentIndex = 0; // Loop back to the first box
  }
  updateExperienceBoxes();
}

// Initialize the first box as active
updateExperienceBoxes();
