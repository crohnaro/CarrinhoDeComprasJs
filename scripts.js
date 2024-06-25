/* Você precisará implementar no carrinho de compras a soma do total dentro da função abaixo ja criada.*/

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');

    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 0;

    items.forEach(function(item) {
        const price = parseFloat(item.getAttribute('data-price'));
        totalPrice += price;
    });

    const formattedTotal = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    totalPriceElement.textContent = formattedTotal;
});
