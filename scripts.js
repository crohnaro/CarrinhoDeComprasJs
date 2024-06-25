/* Você precisará implementar no carrinho de compras a soma do total dentro da função abaixo ja criada.*/

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');

    let totalPrice = 0;

    items.forEach(function(item) {
        const price = parseFloat(item.getAttribute('data-price'));
        
        totalPrice += price;
    });

    const totalElement = document.getElementById('total-price');

    totalElement.textContent = totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
});
