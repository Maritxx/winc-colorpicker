/*REQUIREMENTS
1. Hamburger menu that will open when hovered over the icon. The menu will close when it is not being hovered.
    -CAN ALSO BE CLICK TO OPEN (basic requirement)
2. Hamburger menu has several menu-items. Clicking on one of these menu-items changes the background of the body to the color that menu-item represents.
3. The menu-items have the background-color they represent (each menu-item has a different background-color).
    -CAN ALSO JUST BE TEXT THAT HAS THE COLOR-NAME IN IT (basic requirement)
4. The user can only click on one menu-item from the menu. When clicking on a menu-item, the hamburger menu closes.
5. The transition for the menu has to be sliding in and out (smoothly).
    -CAN ALSO BE IGNORED (basic requirement)
6. There is text on the webpage that describes the current color, it will change depending on which color is selected.
    -CAN ALSO BE IGNORED (basic requirement)
7. The menu-items are radio buttons so that you can see which one is 'active' at that moment. 
    -CAN ALSO BE IGNORED (basic requirement)
8. You are able to change the colors of the web-page with your keyboard (1 for first-color, 2 for second-color etc.)
    -CAN ALSO BE IGNORED (basic requirement) */


/*TO DO
1. Hamburger menu opens on hover instead of click.
2. Transition for the menu (sliding in)
4. Radio buttons showcase which color is active.
5. Color can be changed with keyboard. */


//TOGGLES MENU
const menuToggle = document.querySelector("#menuToggle");
const menuContent = document.querySelector("#menuContent");

const toggleMenu = function() {
    menuContent.classList.toggle("toggleMenu");
}

menuToggle.addEventListener("click", toggleMenu);


//GETS COLOR FROM BUTTON + CHANGES BG. 
const colorOptions = document.querySelectorAll("#menuContent li");

Array.from(colorOptions).forEach((colorOption) => { 
    colorOption.addEventListener("click", function() {

        const selectedColor = window.getComputedStyle(colorOption).getPropertyValue('background-color');

        document.body.style.backgroundColor = selectedColor;

        document.getElementById("currentColor").innerText = "The current color is " + colorOption.innerHTML;

        toggleMenu();
    });
});


