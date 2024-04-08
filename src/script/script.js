// variables for display

const mainSection = document.getElementById("main");
const aboutSection = document.getElementById("about");
const musicianSection = document.getElementById("musician");
const programmerSection = document.getElementById("programmer");
const filmmakerSection = document.getElementById("filmmaker");
const contactSection = document.getElementById("contact");

// variables for buttons
const mainBtn = document.getElementById("mainBtn");
const aboutBtn = document.getElementById("aboutBtn");
const musicianBtn = document.getElementById("musicianBtn");
const programmerBtn = document.getElementById("programmerBtn");
const filmmakerBtn = document.getElementById("filmmakerBtn");
const contactBtn = document.getElementById("contactBtn");

//  buttons actions
mainBtn.addEventListener("click", function () {
  showMain();
});
aboutBtn.addEventListener("click", function () {
  showAbout();
});

musicianBtn.addEventListener("click", function () {
  showMusician();
});

programmerBtn.addEventListener("click", function () {
  showProgrammer();
});

filmmakerBtn.addEventListener("click", function () {
  showFilmmaker();
});

contactBtn.addEventListener("click", function () {
  showContact();
});
// create functions for displaying sections

function showMain() {
  mainSection.style.display = "block";
  aboutSection.style.display = "none";
  musicianSection.style.display = "none";
  programmerSection.style.display = "none";
  filmmakerSection.style.display = "none";
  contactSection.style.display = "none";
}

function showAbout() {
  mainSection.style.display = "none";
  aboutSection.style.display = "block";
  musicianSection.style.display = "none";
  programmerSection.style.display = "none";
  filmmakerSection.style.display = "none";
  contactSection.style.display = "none";
}

function showMusician() {
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  musicianSection.style.display = "block";
  programmerSection.style.display = "none";
  filmmakerSection.style.display = "none";
  contactSection.style.display = "none";
}

function showProgrammer() {
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  musicianSection.style.display = "none";
  programmerSection.style.display = "block";
  filmmakerSection.style.display = "none";
  contactSection.style.display = "none";
}

function showFilmmaker() {
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  musicianSection.style.display = "none";
  programmerSection.style.display = "none";
  filmmakerSection.style.display = "block";
  contactSection.style.display = "none";
}

function showContact() {
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  musicianSection.style.display = "none";
  programmerSection.style.display = "none";
  filmmakerSection.style.display = "none";
  contactSection.style.display = "block";
}

window.onload = () => {
  showMain();
};
