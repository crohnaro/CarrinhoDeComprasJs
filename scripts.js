document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    let total = 0;
    items.forEach(item => {
        const price = parseFloat(item.dataset.price);
        total += price;
    });
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = total.toFixed(2);
});
