const mainDisplay = document.querySelector('.mainDisplay');
const defaultText = document.getElementById('default-text');
const isTabSelected = false;
let currentTab;
let currentProject;
var previousTab;
var previousProject
function showProject(tab) {
    if (document.querySelector(`.tab${tab}`) !== previousTab){
            defaultText.style.display = 'none';
            currentTab = document.querySelector(`.tab${tab}`);
            currentProject = document.querySelector(`.project${tab}`);
            currentProject.style.display = 'block';
            isSelected(currentTab);
            previousTab = currentTab;
            previousProject = currentProject;
    }
}

function isSelected(tab, previous) {
        tab.className += ' tab-highlight';
        if (previousTab){
            previousTab.classList.remove('tab-highlight');
            previousProject.style.display = 'none';
        }
    }

const mobileNavButton = document.querySelector(".mobile-burger");
const mobileNavBar = document.querySelector('.mobileNav');
mobileNavButton.addEventListener('click', ()=> {
mobileNavBar.style.display === 'block' ? mobileNavBar.style.display = 'none' : mobileNavBar.style.display = 'block';
})
