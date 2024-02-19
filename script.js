document.addEventListener('DOMContentLoaded', function() {
    // Captura todos os botões "Adicionar ao Carrinho"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Adiciona um evento de clique a cada botão
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Muda a cor de fundo para verde ao clicar
            button.style.backgroundColor = 'green';
            
            // Define um atraso para restaurar a cor original (vermelha)
            setTimeout(() => {
                button.style.backgroundColor = 'red';
            }, 1000); // Tempo em milissegundos (1 segundo neste caso)
        });
    });

    // Esconder opções de acordo com a seleção
    const tamanhoSelect = document.getElementById('tamanho');
    const materialSelect = document.getElementById('material');
    const corSelect = document.getElementById('cor');

    tamanhoSelect.addEventListener('change', () => {
        hideOptions('tamanho', tamanhoSelect.value);
    });

    materialSelect.addEventListener('change', () => {
        hideOptions('material', materialSelect.value);
    });

    corSelect.addEventListener('change', () => {
        hideOptions('cor', corSelect.value);
    });

    function hideOptions(category, value) {
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            if (product.dataset[category] === value || value === '') {
                product.style.display = 'inline-block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Carrossel da equipe
    const teamCarousel = document.querySelector('.team-carousel');
    teamCarousel.scrollLeft = 0; // Inicializa a posição do carrossel no início

    // Carrossel de depoimentos
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    testimonialCarousel.scrollLeft = 0; // Inicializa a posição do carrossel no início
});
