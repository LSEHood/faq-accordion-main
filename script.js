// script.js
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const summary = item.querySelector('summary');
      
      summary.addEventListener('click', function(event) {
        event.preventDefault();
        item.toggleAttribute('open');
      });
  
      summary.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          item.toggleAttribute('open');
        }
      });
    });
  });