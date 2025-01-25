document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    
    document.querySelectorAll('.photo').forEach(photo => {
        photo.addEventListener('click', function(e) {
            const img = this.querySelector('img');
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    }
});
