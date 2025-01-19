document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px', 
      threshold: 0.1 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);
  
    elements.forEach(element => observer.observe(element));
  });


  
  document.addEventListener('DOMContentLoaded', () => {
    const gb = document.querySelectorAll('.grid-blocks');
  
  gb.forEach(block => {
      block.addEventListener('mouseenter', (e) => {
          e.target.classList.add('hovered');
      });

      block.addEventListener('mouseleave', (e) => {
        timeoutId = setTimeout(() => {
          e.target.classList.remove('hovered');
      }, 150);
      });
  });
});

const viewportHeight = window.innerHeight;


window.addEventListener('scroll', function() {

    const scrollPosition = window.scrollY;
    if(scrollPosition <=viewportHeight + 20 ) {
        document.querySelector('nav').classList.remove('vh101');
    }
    if (scrollPosition > viewportHeight + 30) {

        document.querySelector('nav').classList.add('vh101');
    } 
    if (scrollPosition > (viewportHeight*2) + 50) {

      document.querySelector('nav').classList.add('vh201');
  } 
});

  
