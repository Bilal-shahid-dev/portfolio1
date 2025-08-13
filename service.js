const allSections = document.querySelectorAll(".section");
let prevSectionIndex = -1;

function removeBackSection() {
  allSections.forEach(sec => sec.classList.remove("back-section"));
}

function addBackSection(index) {
  if (index >= 0 && index < allSections.length) {
    allSections[index].classList.add("back-section");
  }
}

function showSection(element) {
  const targetId = element.getAttribute("href").split("#")[1];
  allSections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(targetId).classList.add("active");
}

// Update previous section index before showing new section
function goToSection(element) {
  let currentIndex = Array.from(allSections).findIndex(sec =>
    sec.classList.contains("active")
  );

  if (currentIndex !== -1) {
    prevSectionIndex = currentIndex; // save the currently active section index
  }

  removeBackSection();
  if (prevSectionIndex !== -1) {
    addBackSection(prevSectionIndex);
  }

  showSection(element);
}

// Service buttons click
document.querySelectorAll(".service-a, .service-b, .service-c, .service-d, .service-e, .service-f")
  .forEach(serviceBtn => {
    serviceBtn.addEventListener("click", function(e) {
      e.preventDefault();
      goToSection(this);
    });
  });

// Back buttons click
document.querySelectorAll(".btn-back").forEach(backBtn => {
  backBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (prevSectionIndex !== -1) {
      removeBackSection();
      addBackSection(Array.from(allSections).findIndex(sec =>
        sec.classList.contains("active")
      ));

      allSections.forEach(sec => sec.classList.remove("active"));
      allSections[prevSectionIndex].classList.add("active");

      // reset prevSectionIndex so it won't keep showing wrong section later
      prevSectionIndex = -1;
    }
  });
});
