// const slides = document.querySelectorAll('.slide');
// let currentIndex = 1;

// function showSlides(index) {
//     slides.forEach((slide, i) => {
//         if (i === index) {
//             slide.classList.add('current-slide');
//             slide.classList.remove('previous-slide', 'next-slide');
//         } else if (i === (index - 1 + slides.length) % slides.length) {
//             slide.classList.add('previous-slide');
//             slide.classList.remove('current-slide', 'next-slide');
//         } else if (i === (index + 1) % slides.length) {
//             slide.classList.add('next-slide');
//             slide.classList.remove('current-slide', 'previous-slide');
//         } else {
//             slide.classList.remove('current-slide', 'previous-slide', 'next-slide');
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlides(currentIndex);

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % slides.length;
//         showSlides(currentIndex);
//     }, 3000); // Change slide every 3 seconds
// });

