// When the "Yes" button is clicked
function nextPage() {
    window.location.href = "yes.html";  // Redirect to the 'yes' page
}

// When the mouse hovers over the "No" button
function moveButton() {
    const button = document.getElementById("noButton");

    // Generate random positions within the viewport
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
