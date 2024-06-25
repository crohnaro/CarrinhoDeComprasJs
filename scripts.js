/* Você precisará implementar no carrinho de compras a soma do total dentro da função abaixo ja criada.*/

document.addEventListener('DOMContentLoaded', function () {
    const carItems = document.querySelectorAll('.item');

    const totalPriceElement = document.getElementById('total-price');

    let total = 0;

    carItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));

        total += price;
    });

    totalPriceElement.textContent = total.toFixed(2)
});

