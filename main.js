// 1. Prendere gli elementi che ci servono attraverso la classe o l'id
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const openMenu = document.getElementById ("open-menu");
const closeMenu = document.getElementById ("close-menu");

// 2. Cliccando div.hamburger-menu passa da display:none a display:block
openMenu.addEventListener ('click', 
    function () {
        hamburgerMenu.style.display = "block";
    }
)

// 3. Cliccando la x div.hamburger-menu passa nuovamente a display: none
closeMenu.addEventListener ('click', 
    function () {
        hamburgerMenu.style.display = "none";
    }
)

// Sarebbe stato meglio farlo in questo modo
// const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
// const openMenu = document.getElementById ("open-menu");
// const closeMenu = document.getElementById ("close-menu");

// openMenu.addEventListener ('click', 
//     function () {
//         hamburgerMenu.classList.add("active");
//     }
// )

// closeMenu.addEventListener ('click', 
//     function () {
//         hamburgerMenu.classList.remove("active");
//     }
// )