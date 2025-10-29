 // Grabbing navbar elements
 const hamburger = document.querySelector('.hamburger');
 const hamburgerWrap = document.querySelector('.hamburgerWrap')
 const navBar = document.querySelector('.navBar');


 function toggleNavbar() {
                hamburger.classList.toggle('isActive');
                navBar.classList.toggle('isActive');
                hamburgerWrap.classList.toggle('isActive');
            }

export default toggleNavbar