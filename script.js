document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const messageDiv = document.getElementById('message');
    const container = document.querySelector('.container');

    noButton.addEventListener('mouseover', function() {
        const randomX = Math.floor(Math.random() * (container.clientWidth - noButton.clientWidth));
        const randomY = Math.floor(Math.random() * (container.clientHeight - noButton.clientHeight));
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', function() {
        messageDiv.classList.remove('hidden');
    });
});
