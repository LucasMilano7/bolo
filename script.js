document.addEventListener("", function() {
    
    const buttons = document.querySelectorAll('');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
          
            const targetId = this.getAttribute('');
            const targetElement = document.querySelector(targetId);

           
            if (targetElement) {
                
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
