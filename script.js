document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões da nav-bar
    const buttons = document.querySelectorAll('.nav-bar button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém o ID do target a partir do atributo data-target
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            // Verifica se o elemento de destino existe
            if (targetElement) {
                // Faz a rolagem suave até o elemento
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});