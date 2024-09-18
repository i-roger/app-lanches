# Visualize a aplicação: https://lanches-one.vercel.app

Falta fazer :
- Melhorar sistema de validação do modal.
- Adicionar todos os produtos, preços e descrições.
- Carrousel para os itens usando 'npm install swiper'.

Feito :
- Fazer condição no Botão de finalização de compra | Feito função FinalizarCompra() ✅
- Design Mobile Responsivo ✅
- Colocar valores para aparecer no formato BRL -> "R$1,99" Usei a função .toLocaleString() ✅

OBSERVAÇÃO CAROUSEL SWIPER :
    ORGANIZAR:
    -> O componente swiper.tsx que é o carousel, não funciona.
    pois ao adicionar o item ao carrinho é gerado um erro.
    não é possivel acessar a função em page.tsx para adicionar ao carrinho.
    -> O carousel está funcionando em page.tsx normalmente. 
