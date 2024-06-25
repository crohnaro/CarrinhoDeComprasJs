/* Você precisará implementar no carrinho de compras a soma do total dentro da função abaixo ja criada.*/

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll("#cart-items .item");
 
  let total = 0;
 
  cartItems.forEach(function(item) {
      const price = parseFloat(item.getAttribute("data-price"));
 
      total += price;
  });
 
  document.getElementById("total-price").textContent = total.toFixed(2);
});
