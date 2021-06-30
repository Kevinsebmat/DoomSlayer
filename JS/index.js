document.addEventListener("DOMContentLoaded", (e) => {
    const instructionButton = document.querySelector('.instruction');
    const instructionPage = document.querySelector('.controls');
    const menu = document.querySelector('.pre-menu');

    instructionButton.addEventListener('click', () => {
        menu.classList.add('hidden');
        setTimeout(() => {
            instructionPage.classList.remove('hidden');
            instructionPage.classList.add('fade-in');
        }, 1000);
    });

});