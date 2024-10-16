// Get elements
const trailerButton = document.getElementById("buttonWatch");
const videoModal = document.getElementById("videoModal");
const closeButton = document.querySelector(".closeButton");
const buttonWatch = document.getElementById("buttonWatch");

// Show modal when button is clicked
trailerButton.addEventListener("click", () => {
    videoModal.style.display = "block";
});

// Hide modal when close button is clicked
closeButton.addEventListener("click", () => {
    videoModal.style.display = "none";
    // Stop the video playback when closing the modal
    buttonWatch.src = buttonWatch.src;
});

// Hide modal if clicked outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = "none";
        // Stop the video playback when closing the modal
        buttonWatch.src = buttonWatch.src;
    }
});
