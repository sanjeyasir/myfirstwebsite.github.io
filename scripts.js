document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

function showProductDetails(title, description, imageUrl) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('productModal').style.display = "block";
}

function closeProductDetails() {
    document.getElementById('productModal').style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
