<script>
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    const h1 = document.querySelector('.hero-section h1');
    const p = document.querySelector('.hero-section .subline');
    
    // You can tune these numbers to make it stronger or softer
    const rotate = scrollY * 0.05; // Rotate by up to ~5 degrees
    const skew = scrollY * 0.02;   // Skew slightly
    
    h1.style.transform = `rotate(${rotate}deg) skewY(${skew}deg)`;
    p.style.transform = `rotate(${rotate * 0.5}deg) skewY(${skew * 1.5}deg)`;
});
</script>