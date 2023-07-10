// JavaScript code

// Add responsive navigation functionality
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    const targetOffsetTop = target.offsetTop;

    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth',
    });
  });
});

// Adjust navigation on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navigation.classList.remove('show');
  }
});
