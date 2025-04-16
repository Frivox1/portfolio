// Observer pour la section d'intro (apparait quand la page se charge)
const introSection = document.querySelector('.intro-section');

const introObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      introObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

introObserver.observe(introSection);

// Observer pour les projets
const projectItems = document.querySelectorAll('.project-item');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      projectObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.7
});

projectItems.forEach(item => projectObserver.observe(item));