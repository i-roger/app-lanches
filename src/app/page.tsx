'use client'
import React, { useState } from "react"
import Navbar from "@/app/components/navbar";
import Image from "next/image"

interface IBook {
  id:number,
  title:string,
  price:number,
  img:string // Foi adicionado na interface "img": "string" -> pois passa o caminho da imagem.
}

interface IShoppingCartItem {
  product: IBook
  quantity: number
}

const books: IBook[] = [
  {id:1, title:"Esfiha de Queijo", price: 10.99, img:"/produtos/esfiha-queijo.png"},
  {id:2, title:"Esfiha de Carne", price: 8.99, img:"/produtos/esfiha-queijo.png"},
  {id:3, title:"Esfiha de Calabresa", price: 90.99, img:"/produtos/esfiha-queijo.png"}
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
    let modal = document.getElementById("carrinho-modal")!
    modal.style.display = "flex"
  }

  const btnFecharModal = () => {
    let modal = document.getElementById("carrinho-modal")!
    modal.style.display = "none"
  }




  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <div id="menu" className="flex flex-col bg-slate-100">
        {/* Divisão Esfiha */}
        <div className="flex p-5 justify-center">
          <h1 className="text-[32px] text-black font-bold">Esfihas</h1>  
        </div>
        {/* Divisão */}

        {/* Cards Produtos Esfiha */}
        <div className="flex flex-wrap gap-7 p-5 justify-center">

          {books.map(book => (
          <div key={book.id} className="w-[330px] flex justify-between flex-col bg-white rounded ring-[1px] drop-shadow-xl ring-gray-300">
            <div className="p-4 ">
              <p className="text-[32px] font-bold">{book.title}</p>
              <p>Descrição!</p>
            </div>
            <Image width={300} height={300} alt="" src={book.img}/>

            <div className="w-[330px] h-[70px] p-4 flex justify-between">
              <div id="preço" className="flex items-center justify-center text-[32px]">
                <p>R${book.price}</p>
              </div>
              <button className="flex items-center justify-center px-4 py-5 text-sm font-bold bg-[#FF870C] text-black rounded-full" 
              onClick={() => handleAddToCart(book.id)}>
                Add to Cart
              </button>
            </div>
          </div>))}


        </div>
        {/* Produtos Esfiha */}
      </div>
    </main>

    {/* MODAL */}
    <div id="carrinho-modal" className="justify-center items-center w-full h-full bg-black/60 fixed top-0 left-0 hidden">
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]"> {/* <---- Background do Card Modal */}
        <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
        <div id="carrinho-items" className="flex flex-col justify-between mb-2">
        {shoppingCart.map((item) => (
          <div className="flex justify-between px-4 ring-[1px] shadow-md ring-gray-300 rounded" key={item.product.id}>
            <div className="flex justify-center gap-2 items-center">
              <Image className="p-2" alt="" width={100} height={300} src={item.product.img}/>
              <div className="flex flex-col justify-center">
                <p>{item.product.title}</p>
                <p>Valor: R${item.product.price}</p>
                <p>Quantidade: {(item.quantity)}x</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 bg-red-500 rounded-full" onClick={() => handleRemoveFromCart(item.product.id)}>Remove</button>
            </div>
        </div>))}
        </div>

        <p className="font-bold">Total: <span id="carrinho-total">R${totalCart.toFixed(2)}</span></p>

        <p className="font-bold mt-4">Endereço de Entrega:</p>
        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          id="address"
          className="w-full border-2 p-1 rounded my-1"
          />
          <p className="text-red-500 hidden" id="address-warn">Digite seu endereço completo!</p>

          <div className="flex items-center justify-between mt-5 w-full">
            <button onClick={btnFecharModal} id="close-modal-btn">Fechar</button>
            <button id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">Finalizar Pedidos</button>
          </div>
      </div>
    </div>

    {/* FIM MODAL */}
    <footer className="flex items-center justify-center w-full bg-red-500 py-2 fixed bottom-0 z-40">
      <button onClick={abrirModal} id="carrinho-btn" className="flex items-center gap-2 font-bold text-white">
            (<span id="card-count">{totalQuantity}</span>)
            Ver Carrinho
            {/* <i class="fa fa-cart-plus text-lg text-white"></i> */}
        </button>
    </footer>
    </>
  );
}
