const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

// Auto slide cada 4 segundos
setInterval(nextSlide, 4000);

// Click en puntitos
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});