document.addEventListener("DOMContentLoaded", function() {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Scroll reveal animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        var windowHeight = window.innerHeight;
        
        reveals.forEach(el => {
            var elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                el.classList.add("active");
            }
        });
    }
    
    window.addEventListener("scroll", reveal);
    
    // Trigger once on load
    setTimeout(reveal, 100);
});
