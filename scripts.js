// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let currentIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.transform = `translateY(${100 * (i - index)}vh)`;
        });
    }

    showSection(currentIndex);

    document.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentIndex = (currentIndex + 1) % sections.length;
        } else {
            currentIndex = (currentIndex - 1 + sections.length) % sections.length;
        }
        showSection(currentIndex);
    });

    document.querySelectorAll('nav ul li a').forEach((anchor, index) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            showSection(currentIndex);
        });
    });
});
