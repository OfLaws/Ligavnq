document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');

    const makeItFloat = function() 
{
        const maxX = document.body.clientWidth - this.offsetWidth;
        const maxY = document.body.clientHeight - this.offsetHeight;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        this.style.position = 'absolute'; 
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';
    };

    noButton.addEventListener('mouseover', makeItFloat);
    noButton.addEventListener('touchstart', makeItFloat, {passive: true});

    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', function() {
        alert('Ще те чакаме към 18:00 - 18:15 - 18:30');
    });
});