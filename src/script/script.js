// Collect sections in one variable
const sections = {
  main: document.getElementById("main"),
  musician: document.getElementById("musician"),
  programmer: document.getElementById("programmer"),
  filmmaker: document.getElementById("filmmaker"),
  contact: document.getElementById("contact"),
};

// Collect buttons in one variable
const buttons = {
  mainBtn: document.getElementById("mainBtn"),
  musicianBtn: document.getElementById("musicianBtn"),
  programmerBtn: document.getElementById("programmerBtn"),
  filmmakerBtn: document.getElementById("filmmakerBtn"),
  contactBtn: document.getElementById("contactBtn"),
};

// Hide all sections
function hideAllSections() {
  for (const section in sections) {
    sections[section].style.display = "none";
  }
}

// Show the selected section
function showSection(sectionId) {
  hideAllSections();
  sections[sectionId].style.display = "block";
}

// Add event listeners to buttons
for (const btnId in buttons) {
  buttons[btnId].addEventListener("click", function (event) {
    const sectionId = btnId.replace("Btn", ""); // Remove "Btn" from button id
    showSection(sectionId);
  });
}

// Show the "main" section upon page load
window.onload = () => {
  showSection("musician");
};
