function toggleButton() {
    const checkboxes = document.querySelectorAll('.option input');
    const button = document.getElementById('continueBtn');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (isChecked) {
        button.classList.add('enabled');
        button.removeAttribute('disabled');
    } else {
        button.classList.remove('enabled');
        button.setAttribute('disabled', 'true');
    }
}


let currentSlide = 0;
    const slider = document.getElementById('testimonialSlider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    function showSlide(n) {
      slider.style.transform = `translateX(-${n * 100}%)`;
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    showSlide(currentSlide);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);


    document.addEventListener("DOMContentLoaded", function () {
      const faqs = document.querySelectorAll(".faq");
  
      faqs.forEach((faq) => {
          faq.addEventListener("click", function () {
              this.classList.toggle("open");
              const answer = this.querySelector(".faq-answer");
              answer.style.display = answer.style.display === "block" ? "none" : "block";
              
             
              const arrow = this.querySelector(".faq-arrow");
              if (answer.style.display === "block") {
                  arrow.innerHTML = "&#11165;"; 
              } else {
                  arrow.innerHTML = "&#11167;"; 
              }
          });
      });
  });
