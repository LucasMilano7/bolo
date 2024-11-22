document.addEventListener("DOMContentLoaded", function() {
    
    const buttons = document.querySelectorAll('.nav-bar button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém o ID do target a partir do atributo data-target
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

           
            if (targetElement) {
                
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
