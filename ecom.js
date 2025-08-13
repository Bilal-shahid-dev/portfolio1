var typed =new Typed(".typing", {   
    strings: ["", " Shopify Developer", "Wordpress Developer", "Digital Marketer","SEO-Expert"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



const nav =document.querySelector(".nav");
navList = nav.querySelectorAll("li");
totalNavList = navList.length;
allSections = document.querySelectorAll(".section");
totalSections = allSections.length;
for(let i=0; i<totalNavList; i++){
    const a= navList[i].querySelector("a");
    a.addEventListener("click", function(){
        removeBackSection(); 
        for(let j=0; j<totalNavList; j++){
            
            if (navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
                // allSections[j].classList.add('back-section');
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this); 
        if( window.innerWidth < 1200){
            asideSectionTogglerBtn()
        }
    });
}
function removeBackSection(){
    for(let i=0; i<totalSections; i++){
        allSections[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSections[num].classList.add('back-section');
}
function showSection(element) {
    for(let i=0; i<totalSections; i++){
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav (element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1];
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
           navList[i].querySelector("a").classList.add("active") 
        }
    }
}

document.querySelector(".btn-hire-me").addEventListener('click', function () {
    const sectionIndex = this.getAttribute("data-section-index");
    removeBackSection();
    addBackSection(sectionIndex);
    showSection(this);
    updateNav(this);
});





document.querySelector(".btn").addEventListener('click', function () {
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex);
    removeBackSection();
    addBackSection(sectionIndex);
    showSection(this);
    updateNav(this);
});

const navTogglerBtn = document.querySelector('.nav-toggle'),
      aside = document.querySelector('.aside');

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSections; i++){
        allSections[i].classList.toggle("open")
    }
}



































