var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200, // Ajusta la profundidad para un efecto más pronunciado
        modifier: 1.5, // Ajusta este valor para cambiar la intensidad del efecto
        slideShadows: true // Mantén las sombras para un efecto más visual
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        }
    }
});