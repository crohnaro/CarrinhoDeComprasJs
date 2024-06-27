/* Você precisará implementar no carrinho de compras a soma do total dentro da função abaixo ja criada.*/

document.addEventListener('DOMContentLoaded', function () {
            function calcularTotal() {
                // Função para converter valores monetários em números
                function converterParaNumero(valorMonetario) {
                    return parseFloat(valorMonetario.replace('R$', '').replace(',', '.').trim());
                }

                // Selecionar todos os itens do carrinho
                let itensCarrinho = document.querySelectorAll('#cart-items .item');
                let valoresMonetarios = [];

                // Extrair preços dos itens do atributo data-price
                itensCarrinho.forEach(item => {
                    valoresMonetarios.push(item.getAttribute('data-price'));
                });

                // Calcular a soma dos valores monetários
                let soma = valoresMonetarios.reduce((total, valor) => total + converterParaNumero(valor), 0);

                // Atualizar o valor total na página
                document.getElementById('total-price').textContent = soma.toFixed(2).replace('.', ',');

                console.log("A soma dos valores monetários é:", soma.toFixed(2).replace('.', ',')); // Saída: A soma dos valores monetários é: 109,96
            }

            // Chamar a função para calcular o total ao carregar a página
            calcularTotal();
        });
