const menu = document.getElementById("menu")
const btnCarrinho = document.getElementById("carrinho-btn")
const modalCarrinho = document.getElementById("carrinho-modal")
const carrinhoItemsContainer = document.getElementById("carrinho-items")
const totalCarrinho = document.getElementById("carrinho-total")
const btnCheckout = document.getElementById("checkout-btn")
const closeModal = document.getElementById("close-modal-btn")
const counterCarrinho = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

function abrirModal() {
btnCarrinho?.addEventListener("click", function() {
    modalCarrinho.style.display="flex"
})
}
