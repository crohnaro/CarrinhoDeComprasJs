document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os itens do carrinho
    const cartItems = document.querySelectorAll('.item');

    // Seleciona o elemento onde o total será exibido
    const totalPriceElement = document.getElementById('total-price');

    // Inicializa o total
    let total = 0;

    // Itera sobre todos os itens do carrinho
    cartItems.forEach(item => {
        // Obtém o preço do item do atributo data-price
        const price = parseFloat(item.getAttribute('data-price'));
        // Adiciona o preço do item ao total
        total += price;
    });

    // Atualiza o elemento do total com o valor calculado
    totalPriceElement.textContent = total.toFixed(2);
});
