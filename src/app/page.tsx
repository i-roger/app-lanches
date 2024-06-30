'use client'
import React, { useState } from "react"
import Navbar from "@/app/components/navbar";
import Image from "next/image"

import {IBook, IShoppingCartItem} from "./interfaces/interfaces"

const books: IBook[] = [
  {id:1, title:"Esfiha de Queijo", descricao:"A melhor esfiha de queijo que você vai provar!", price: 10.99, img:"/produtos/esfiha-queijo.png"},
  {id:2, title:"Esfiha de Carne", descricao:"", price: 8.99, img:"/produtos/esfiha-queijo.png"},
  {id:3, title:"Esfiha de Calabresa", descricao:"", price: 90.99, img:"/produtos/esfiha-queijo.png"}
]

export default function Home() {

  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([])
  
  const handleAddToCart = (id: number) => {
    const book = books.find(book => book.id === id)
    const alreadyInShoppingCart = shoppingCart.find(item => item.product.id === id)
    
    // if book is in the shopping cart
    if(alreadyInShoppingCart) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map(item => {
        if (item.product.id === id) ({
          ...item,
          quantity: item.quantity++
        })
        return item
      })
      setShoppingCart(newShoppingCart)
      return
    }

    // if book is not in the shopping cart

    const cartItem : IShoppingCartItem = {
      product: book!,
      quantity: 1,
    }
    const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem]
    setShoppingCart(newShoppingCart)
  }

  const handleRemoveFromCart = (id: number) => {
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    )

    if(alreadyInShoppingCart!.quantity > 1) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map(item => {
        if (item.product.id === id) ({
          ...item,
          quantity: item.quantity--
        })
        return item
      })
      setShoppingCart(newShoppingCart)
      return
    }

    //if there is only one item with the id in the cart
    const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(item => item.product.id !== id)
    setShoppingCart(newShoppingCart)
  }

  const totalCart = shoppingCart.reduce((total, current) => {
    return total + (current.product.price * current.quantity)
  }, 0)

  const totalQuantity = shoppingCart.reduce((total, current) => {
    return total + current.quantity
  },0)


  // Funções para Modal!
  const abrirModal = () => {
    let body = document.querySelector("body") as HTMLElement;
    body.style.overflow = "hidden" // Adicionado para remover o scroll do fundo de volta
    let modal = document.getElementById("carrinho-modal") as HTMLElement;
    modal.style.display = "flex"
  }

  const btnFecharModal = () => {
    let body = document.querySelector("body") as HTMLElement;
    body.style.overflow = "auto" // Adicionado para colocar o scroll do fundo de volta
    let modal = document.getElementById("carrinho-modal") as HTMLElement;
    modal.style.display = "none"
  }

  const finalizarCompra = () => {
    let addressInput = document.getElementById("addressInput") as HTMLFormElement;
    let addressWarn = document.getElementById("addressWarn") as HTMLElement;
    let nameInput = document.getElementById("nameInput") as HTMLFormElement;
    let nameWarn = document.getElementById("nameWarn") as HTMLElement;

    if(totalQuantity === 0) {
      return console.log("Você não adicionou nada ao carrinho!");
    }

    // PROCURAR MELHORES FORMAS DE VALIDAR OS CAMPOS ABAIXO DO MODAL:
    if(nameInput.value === ""){
      nameWarn.classList.remove("hidden")
      nameInput.classList.add("border-red-500")
      return console.log("O nome está vazio!");
    }

    if(nameInput.value !== ""){
      nameInput.classList.remove("border-red-500")
      nameWarn.classList.add("hidden")
      console.log("PASSOU!")
    }

    if(addressInput.value === ""){
      addressWarn.classList.remove("hidden")
      addressInput.classList.add("border-red-500")
      return console.log("O endereço está vazio!");
    }
    
    if(addressInput.value !== ""){
      addressInput.classList.remove("border-red-500")
      addressWarn.classList.add("hidden")
      nameInput.classList.remove("border-red-500")
      nameWarn.classList.add("hidden")
      console.log("PASSOU!")
    }

  }

  return (
    <>
    <Navbar />
      <div className="flex flex-col py-10">
        {/* Divisão Esfiha */}
        <div className="flex justify-center">
          <h1 className="text-[32px] text-black font-bold">Esfihas</h1>  
        </div>
        {/* Divisão */}

        {/* Cards */}
        <div className="flex flex-wrap gap-7 p-5 justify-center">

          {books.map(book => (
          <div key={book.id} className="w-[330px] flex justify-between flex-col bg-white rounded ring-[1px] drop-shadow ring-gray-300 mb-10">
            <div className="p-4 ">
              <p className="text-[32px] font-bold">{book.title}</p>
              <p>{book.descricao}</p>
            </div>
            <div className="flex justify-center">
              <Image width={300} height={300} alt="" src={book.img}/>
            </div>
            <div className="bg-zinc-100 h-[70px] p-4 flex justify-between">
              <div id="preço" className="flex items-center justify-center text-[24px]">
                <p>{book.price.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}</p>
              </div>
              <button className="flex items-center justify-center px-2 py-5 text-sm font-bold bg-[#FF870C] hover:bg-[#ff9b37] active:bg-[#b96816] rounded-full" 
              onClick={() => handleAddToCart(book.id)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>))}


        </div>
        {/* Cards */}
      </div>

    {/* MODAL */}
    <div id="carrinho-modal" className="justify-center items-center w-full h-full bg-black/60 fixed top-0 left-0 z-[99] hidden">
      <div id="scroll-modal" className="flex flex-col h-[500px] bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px] overflow-y-scroll"> {/* <---- Background do Card Modal */}
        <h2 className="text-center font-bold text-2xl mb-5">Meu Carrinho</h2>
        <div id="carrinho-items" className="flex flex-col justify-between mb-2">
        {shoppingCart.map((item) => (
          <div className="flex justify-between px-4 ring-[1px] shadow-md ring-gray-300 rounded" key={item.product.id}>
            <div className="flex justify-center gap-2 items-center">
              <Image className="p-2" alt="" width={100} height={300} src={item.product.img}/>
              <div className="flex flex-col justify-center">
                <p>{item.product.title}</p>
                <p>Valor: {item.product.price.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}</p>
                <p>Quantidade: {(item.quantity)}x</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 bg-red-500 rounded-full" onClick={() => handleRemoveFromCart(item.product.id)}>Remover</button>
            </div>
        </div>))}
        </div>

        <p className="font-bold">Total: <span id="carrinho-total">{totalCart.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}</span></p>

        <p className="font-bold mt-4">Nome:</p>
        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          id="nameInput"
          className="w-full border-2 p-1 rounded my-1"
          />
          <p className="text-red-500 hidden" id="nameWarn">Digite seu nome!</p>
        
        <p className="font-bold mt-4">Celular:</p>
        <input
          type="text"
          placeholder="Digite seu número no formato -> (XX)XXXXX-XXXX"
          id="celularInput"
          className="w-full border-2 p-1 rounded my-1"
          />
        
        <p className="font-bold mt-4">Email: (opcional)</p>
        <input
          type="text"
          placeholder="Digite seu email..."
          id="emailInput"
          className="w-full border-2 p-1 rounded my-1"
          />

        <p className="font-bold mt-4">Endereço de Entrega:</p>
        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          id="addressInput"
          className="w-full border-2 p-1 rounded my-1"
          />
          <p className="text-red-500 hidden" id="addressWarn">Digite seu endereço completo!</p>

          <div className="flex items-center justify-between mt-5 w-full">
            <button onClick={btnFecharModal} id="close-modal-btn">Fechar</button>
            <button onClick={finalizarCompra} id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">Finalizar Pedidos</button>
          </div>
      </div>
    </div>

    {/* FIM MODAL */}
    <footer className="flex items-center justify-center w-full bg-red-500 py-2 fixed bottom-0 z-40">
      <button onClick={abrirModal} id="carrinho-btn" className="flex items-center gap-2 font-bold text-white">
            (<span id="card-count">{totalQuantity}</span>)
            Ver Carrinho 🛒
            {/* <i class="fa fa-cart-plus text-lg text-white"></i> */}
        </button>
    </footer>
    </>
  );
}
