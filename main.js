//FUNCTION TO TOGGLE MENU
const menuToggle = document.querySelector("#menuToggle");
const menuContent = document.querySelector("#menuContent");

const toggleMenu = function() {
    menuContent.classList.toggle("toggleMenu");
};

menuToggle.addEventListener("click", toggleMenu);


//FUNCTION TO CHANGE COLOR OF BG, ADD BORDER TO SELECTED ITEM IN MENU & CHANGE TEXT BASED ON SELECTED ELEMENT.
const selectColor = function(selectedElement) {
    const selectedColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');
    document.body.style.backgroundColor = selectedColor;

    document.getElementById("currentColor").innerText = "The current color is " + selectedElement.innerHTML;

    Array.from(colorOptions).forEach((option) => {
        option.classList.remove("activeBorder");
    });

    selectedElement.classList.add("activeBorder");
};


//EVENT LISTENERS THAT TARGET THE CORRECT ELEMENT ON CLICK OR KEYPRESS.
const colorOptions = document.querySelectorAll("#menuContent li");

for (let i = 0; i < colorOptions.length; i++) {
    colorOptions[i].addEventListener("click", function() {
        const selectedElement = colorOptions[i];

        selectColor(selectedElement);

        toggleMenu();
    });
};

document.addEventListener("keyup", function(e) {
    if (menuContent.classList.contains("toggleMenu")) {
        if (e.key >= 1 && e.key <= 6) {
            const selectedElement = colorOptions[e.key - 1];

            selectColor(selectedElement);

            toggleMenu();
        };
    };
});