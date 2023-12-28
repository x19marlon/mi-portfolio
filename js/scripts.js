const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

/*const toggleColors = document.getElementById('toggle-colors')*/

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='/assets/icons/sun.svg';
        toggleText.textContent='Light Mode';    
    }else{
        toggleIcon.src="/assets/icons/moon.svg";
        toggleText.textContent="Dark Mode";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsBar = document.getElementById("skillsBar");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
;


const  skillsBar =document.getElementById('skillsBar');

const cargarImagen = (entradas, observador) => {}

const observador = new IntersectionObserver(cargarImagen,{
  root: null, 
  rootMargin: 0,
  threshold: 1.0
});

observador.observer(skillsBar);

