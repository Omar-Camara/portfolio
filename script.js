function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains("light-theme")){
      document.getElementById('parallax').style.backgroundImage = 'url("images/moon.jpg")';
    }else{
      document.getElementById('parallax').style.backgroundImage = 'url("images/sun.jpg")';
    
    }
});
