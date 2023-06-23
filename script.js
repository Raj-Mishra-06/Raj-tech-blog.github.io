document.addEventListener("DOMContentLoaded", function() {
    // Error handling for Font Awesome icons
    function fontAwesomeError() {
      const icons = document.querySelectorAll(".fab, .fas");
      icons.forEach(icon => {
        icon.addEventListener("error", function() {
          icon.classList.remove("fab", "fas");
          icon.classList.add("fa-exclamation-circle");
        });
      });
    }

    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  
    // Parallax scrolling effect
    function parallaxEffect() {
      const parallaxSections = document.querySelectorAll(".parallax");
      parallaxSections.forEach(section => {
        window.addEventListener("scroll", function() {
          const scrollPosition = window.pageYOffset;
          const sectionOffset = section.offsetTop;
          const sectionHeight = section.offsetHeight;
  
          if (
            scrollPosition >= sectionOffset - sectionHeight &&
            scrollPosition <= sectionOffset + sectionHeight
          ) {
            section.style.backgroundPositionY =
              (scrollPosition - sectionOffset) / 2 + "px";
          }
        });
      });
    }
  
    fontAwesomeError();
    parallaxEffect();
  });
  