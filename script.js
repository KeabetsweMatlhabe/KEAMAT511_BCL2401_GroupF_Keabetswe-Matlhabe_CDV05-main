// Function targeting 'menu' and 'icon' 
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");           
    // classList property of an element represents the list of classes applied to that element. The toggle() method of classList adds a class to the element if it's not already present, and removes it if it is.
    menu.classList.toggle("open");       //  toggle the presence of the class "open" on the icon element.
    icon.classList.toggle("open");       
    // when clicked it will either open or remove the open class    
}