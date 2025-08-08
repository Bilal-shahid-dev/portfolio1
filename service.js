const allSections = document.querySelectorAll(".section");
// Remove back-section class from all sections
function removeBackSection() {
  allSections.forEach(sec => sec.classList.remove("back-section"));
}

// Add back-section class to a section by index
function addBackSection(index) {
  if (index >= 0 && index < allSections.length) {
    allSections[index].classList.add("back-section");
  }
}

// Show section based on clicked element's href (#id)
function showSection(element) {
  const targetId = element.getAttribute("href").split("#")[1];
  allSections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(targetId).classList.add("active");

  // Save active section id in localStorage
  localStorage.setItem('activeSectionId', targetId);
}

// Load active section from localStorage on page load
function loadActiveSection() {
  const savedId = localStorage.getItem('activeSectionId');
  if (savedId && document.getElementById(savedId)) {
    allSections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(savedId).classList.add("active");
  } else {
    // If no saved id, show first section or default
    if (allSections.length > 0) {
      allSections.forEach(sec => sec.classList.remove("active"));
      allSections[0].classList.add("active");
    }
  }
}

// Variable to remember previously active section index
let prevSectionIndex = -1;

// Add click listeners to all service links
document.querySelectorAll(".service-a, .service-b, .service-c, .service-d, .service-e, .service-f")
  .forEach(serviceBtn => {
    serviceBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Save current active section index before switching
      prevSectionIndex = Array.from(allSections).findIndex(sec =>
        sec.classList.contains("active")
      );

      removeBackSection();
      if (prevSectionIndex !== -1) addBackSection(prevSectionIndex);

      showSection(this);
    });
  });

// On page load, restore active section
window.addEventListener("load", () => {
  loadActiveSection();
});
