document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        box.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
