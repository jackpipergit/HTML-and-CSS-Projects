// Keep track of which slide we're on
let slideIndex = 1;

// Show the lightbox when an image is clicked
function openModal() {
    document.getElementById("lightboxModal").style.display = "block";
    // Stop the page from scrolling in the background
    document.body.style.overflow = "hidden";
}

// Hide the lightbox when closing
function closeModal() {
    document.getElementById("lightboxModal").style.display = "none";
    // Let the page scroll again
    document.body.style.overflow = "auto";
}

// Move to next or previous slide (n can be 1 or -1)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Jump to a specific slide when clicking thumbnails
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// The main function that handles showing/hiding slides
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const caption = document.getElementById("caption");
    
    // If we've gone past the last slide, loop back to the first one
    if (n > slides.length) {
        slideIndex = 1;
    }
    // If we've gone before the first slide, loop to the last one
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides first
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove the 'active' class from all thumbnails
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and highlight its thumbnail
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // Update the caption text to match the current image
    caption.textContent = dots[slideIndex-1].alt;
}

// Close the lightbox if someone clicks outside the image
// (this is a nice UX touch I learned from YouTube!)
document.addEventListener('click', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Added keyboard controls because who doesn't love keyboard shortcuts?
// Left/Right arrows to navigate, Escape to close
document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightboxModal').style.display === "block") {
        if (e.key === "ArrowLeft") {
            plusSlides(-1);
        } else if (e.key === "ArrowRight") {
            plusSlides(1);
        } else if (e.key === "Escape") {
            closeModal();
        }
    }
});
