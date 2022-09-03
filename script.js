// function to set a given theme/color-scheme
function setTheme(themeName) {

    sunmoon = document.getElementById('sunmoon');
    if (themeName == 'dark') {
        sunmoon.classList.add('fa-sun');
        sunmoon.classList.remove('fa-moon');
    } else {
        sunmoon.classList.remove('fa-sun');
        sunmoon.classList.add('fa-moon');
    }

    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute("data-theme", themeName);
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
})();

function toggleSideMenu() {
    sideMenu = document.getElementById('sideMenu');
    burger = document.getElementById('hamburger');
    sideMenu.classList.toggle("open");
    burger.classList.toggle("open");
}