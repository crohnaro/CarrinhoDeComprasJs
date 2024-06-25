document.addEventListener('DOMContentLoaded', function () {
    // Selecionar a lista de itens no carrinho
    var cartItems = document.querySelectorAll('#cart-items .item');
 
    // Selecionar o elemento onde o total será exibido
    var totalPriceElement = document.getElementById('total-price');
 
    // Inicializar o total como zero
    var total = 0;
 
    // Iterar sobre cada item no carrinho
    cartItems.forEach(function(item) {
        // Obter o preço do item
        var price = parseFloat(item.getAttribute('data-price')); // Converter para número
 
        // Adicionar o preço ao total
        total += price;
    });
 
    // Exibir o total formatado com duas casas decimais
    totalPriceElement.textContent = total.toFixed(2);
});



