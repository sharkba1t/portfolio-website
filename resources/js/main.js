const mainDisplay = document.querySelector('.mainDisplay');
const isTabSelected = false;
let currentTab;
var previousTab;
function showProject(tab) {
    currentTab = document.querySelector(`.tab${tab}`);
    switch(tab){
        case 1:
            mainDisplay.innerHTML = "<p>test</p>";
            isSelected(currentTab);
            previousTab = currentTab;
            break;
        case 2:
            mainDisplay.innerHTML = "<p>test 2</p>";
            isSelected(currentTab);
            previousTab = currentTab;
            break;
        case 3:
            mainDisplay.innerHTML = "<p>test 3</p>";
            isSelected(currentTab);
            previousTab = currentTab;
            break;
        default:
            mainDisplay.innerHTML = "<p>Something has gone wrong</p>";
            
    }
}

function isSelected(tab, previous) {
        tab.className += ' tab-highlight';
        if (previousTab){
            previousTab.classList.remove('tab-highlight');
        }
    }
