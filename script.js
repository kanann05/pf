document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');
  
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, observerOptions);
  
    elements.forEach(element => observer.observe(element));
  });


  
  document.addEventListener('DOMContentLoaded', () => {
    const gb = document.querySelectorAll('.grid-blocks');
    
  // Add event listeners for mouseenter and mouseleave
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

  // Get the height of the viewport (100vh)
const viewportHeight = window.innerHeight;

// Add a scroll event listener
window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    if(scrollPosition <=viewportHeight + 20 ) {
        document.querySelector('nav').classList.remove('vh101');
    }
    if (scrollPosition > viewportHeight + 30) {
        // Apply styles when the scroll reaches 101vh or beyond
        document.querySelector('nav').classList.add('vh101');
    } 
    if (scrollPosition > (viewportHeight*2) + 50) {
      // Apply styles when the scroll reaches 101vh or beyond
      document.querySelector('nav').classList.add('vh201');
  } 
});

  

// document.addEventListener("DOMContentLoaded", () => {
//     const paragraph = document.querySelector('.paragraph');
  
//     // Step 1: Split paragraph into individual lines
//     const wrapLines = () => {
//       const words = paragraph.innerHTML.split(' ');
//       paragraph.innerHTML = ''; // Clear paragraph content
  
//       words.forEach(word => {
//         const span = document.createElement('span');
//         span.textContent = word + ' ';
//         paragraph.appendChild(span);
//       });
//     };
  
//     wrapLines();
  
//     const lines = Array.from(paragraph.children);
  
//     // Step 2: Apply Intersection Observer to each line
//     const observerOptions = {
//       root: null, // Use viewport as root
//       rootMargin: '0px',
//       threshold: 0.1 // Trigger when 10% of the line is visible
//     };
  
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         } else {
//           entry.target.classList.remove('visible');
//         }
//       });
//     }, observerOptions);
  
//     lines.forEach(line => observer.observe(line));
//   });
  