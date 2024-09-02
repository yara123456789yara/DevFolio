var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__visible');
          observer.unobserve(entry.target); // Optional: Stop observing after the animation
        }
      });
    }, {
      threshold: 0.1 // Adjust this threshold based on when you want the animation to trigger
    });
  
    document.querySelectorAll('.animate__animated').forEach(element => {
      observer.observe(element);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
  });
  ScrollReveal().reveal('.animate__animated', {
    duration: 600,
    distance: '20px',
    origin: 'bottom',
    opacity: 0
  });
      