document.addEventListener('DOMContentLoaded', function () {

    var items = document.querySelectorAll('.item')
    var total = 0;

    items.forEach(function(item) {
        var price = parseFloat(item.getAttribute('data-price'));
        total += price
    });

    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = total.toFixed(2)
});

