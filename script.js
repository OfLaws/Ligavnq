document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');

    const makeItFloat = function() {
        // Calculate new positions within the viewport
        const maxX = document.body.clientWidth - this.offsetWidth;
        const maxY = document.body.clientHeight - this.offsetHeight;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Apply the new positions
        this.style.position = 'absolute'; // Use 'absolute' for positioning within the viewport
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';
    };

    // Attach events for both mouse and touch devices
    noButton.addEventListener('mouseover', makeItFloat);
    noButton.addEventListener('touchstart', makeItFloat, {passive: true});

    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', function() {
        alert('Ще те чакаме към 18:00 - 18:15 - 18:30');
    });
});