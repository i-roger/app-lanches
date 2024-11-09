"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/app/components/swiperCarousel/styles.css";

// import required modules

import { IBook, IShoppingCartItem } from "@/app/interfaces/interfaces";

const books: IBook[] = [
  {
    id: 1,
    title: "Esfiha de Queijo",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 10.99,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    id: 2,
    title: "Esfiha de Carne",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 8.99,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    id: 3,
    title: "Esfiha de Calabresa",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 90.99,
    img: "/produtos/esfiha-queijo.png",
  },
];

export default function Home() {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

  const handleAddToCart = (id: number) => {
    const book = books.find((book) => book.id === id);
    
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );

    // if book is in the shopping cart
    if (alreadyInShoppingCart) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity++,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    // if book is not in the shopping cart

    const cartItem: IShoppingCartItem = {
      product: book!,
      quantity: 1,
    };
    const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem];
    setShoppingCart(newShoppingCart);
  };

  const handleRemoveFromCart = (id: number) => {
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );

    if (alreadyInShoppingCart!.quantity > 1) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity--,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    //if there is only one item with the id in the cart
    const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(
      (item) => item.product.id !== id
    );
    setShoppingCart(newShoppingCart);
  };

  const totalCart = shoppingCart.reduce((total, current) => {
    return total + current.product.price * current.quantity;
  }, 0);

  const totalQuantity = shoppingCart.reduce((total, current) => {
    return total + current.quantity;
  }, 0);

  // Funções para Modal!
  const abrirModal = () => {
    let body = document.querySelector("body") as HTMLElement;
    body.style.overflow = "hidden"; // Adicionado para remover o scroll do fundo de volta
    let modal = document.getElementById("scroll-modal") as HTMLElement;
    modal.style.display = "flex";
    modal.style.transform = "translateY(0%)";
  };

  const btnFecharModal = () => {
    let body = document.querySelector("body") as HTMLElement;
    body.style.overflow = "auto"; // Adicionado para colocar o scroll do fundo de volta
    let modal = document.getElementById("scroll-modal") as HTMLElement;
    modal.style.transform = "translateY(100%)";
  };

  const finalizarCompra = () => {
    let addressInput = document.getElementById(
      "addressInput"
    ) as HTMLFormElement;
    let addressWarn = document.getElementById("addressWarn") as HTMLElement;
    let nameInput = document.getElementById("nameInput") as HTMLFormElement;
    let nameWarn = document.getElementById("nameWarn") as HTMLElement;

    if (totalQuantity === 0) {
      return console.log("Você não adicionou nada ao carrinho!");
    }

    // PROCURAR MELHORES FORMAS DE VALIDAR OS CAMPOS ABAIXO DO MODAL:
    if (nameInput.value === "") {
      nameWarn.classList.remove("hidden");
      nameInput.classList.add("border-red-500");
      return console.log("O nome está vazio!");
    }

    if (nameInput.value !== "") {
      nameInput.classList.remove("border-red-500");
      nameWarn.classList.add("hidden");
      console.log("PASSOU!");
    }

    if (addressInput.value === "") {
      addressWarn.classList.remove("hidden");
      addressInput.classList.add("border-red-500");
      return console.log("O endereço está vazio!");
    }

    if (addressInput.value !== "") {
      addressInput.classList.remove("border-red-500");
      addressWarn.classList.add("hidden");
      nameInput.classList.remove("border-red-500");
      nameWarn.classList.add("hidden");
      console.log("PASSOU!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <div className="flex flex-col w-[96px] justify-center bg-red-600 p-4 rounded-xl">
          <div className="flex justify-center">
            ICONE
          </div>
          <a className="" href="/uisimples">Bebidas</a>
        </div>
      </div>

      {/* Divisão Esfiha */}
      <div className="flex justify-center py-4">
          <h1 className="text-3xl text-black font-bold">Esfihas</h1>
        </div>
      {/* Divisão */}

      <div className="flex flex-col pb-14">
        {/* Cards */}
        <div className="flex flex-col items-center gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex bg-white rounded ring-[1px] drop-shadow ring-gray-300"
            >
              <div className="flex flex-col p-4 gap-4">
                <div className="flex">
                  <div className="flex flex-col justify-center">
                    <p className="text-xl font-bold">{book.title}</p>
                    <p className="">{book.descricao}</p>
                  </div>
                  <div>
                    <Image width={128} height={128} alt="" src={book.img} />
                  </div>
                </div>
                <div
                  id="preço"
                  className="flex justify-between text-[24px] font-bold"
                >
                  <p>
                    {book.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button
                  className="p-2 text-sm font-bold bg-[#FF870C] hover:bg-[#ff9b37] active:bg-[#b96816] rounded-full"
                  onClick={() => handleAddToCart(book.id)}
                >
                  Adicionar ao Carrinho
                </button>
                </div>
              </div>
              {/* final cartao */}
            </div>
          ))}
        </div>
        {/* Cards */}
      </div>

      {/* MODAL */}
        <div
          id="scroll-modal"
          className="scroll-modal translate-y-[100%] flex-col w-full h-full bg-white p-5 bg-black/60 fixed top-0 left-0 z-[99] flex"
        >
          {" "}
          {/* <---- Background do Card Modal */}
          <h2 className="text-center font-bold text-2xl mb-5">Meu Carrinho</h2>
          <div
            id="carrinho-items"
            className="flex flex-col gap-4 justify-between"
          >
            {shoppingCart.map((item) => (
              <div
                className="flex justify-between px-4 ring-[1px] shadow-md ring-gray-300 rounded"
                key={item.product.id}
              >
                <div className="flex justify-center gap-2 items-center">
                  <Image
                    className="p-2"
                    alt=""
                    width={100}
                    height={300}
                    src={item.product.img}
                  />
                  <div className="flex flex-col justify-center">
                    <p>{item.product.title}</p>
                    <p>
                      Valor:{" "}
                      {item.product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p>Quantidade: {item.quantity}x</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="p-2 bg-red-500 text-white hover:bg-red-400 active:bg-red-800 rounded"
                    onClick={() => handleRemoveFromCart(item.product.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="font-bold my-5">
            Total:{" "}
            <span id="carrinho-total">
              {totalCart.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
          <p className="font-bold">Nome:</p>
          <input
            type="text"
            placeholder="Digite seu endereço completo..."
            id="nameInput"
            className="w-full border-2 p-1 rounded my-1 drop-shadow"
          />
          <p className="text-red-500 hidden" id="nameWarn">
            Digite seu nome!
          </p>
          <p className="font-bold mt-4">Celular:</p>
          <input
            type="text"
            placeholder="Digite seu número no formato -> (XX)XXXXX-XXXX"
            id="celularInput"
            className="w-full border-2 p-1 rounded my-1 drop-shadow"
          />
          <p className="font-bold mt-4">Email: (opcional)</p>
          <input
            type="text"
            placeholder="Digite seu email..."
            id="emailInput"
            className="w-full border-2 p-1 rounded my-1 drop-shadow"
          />
          <p className="font-bold mt-4">Endereço de Entrega:</p>
          <input
            type="text"
            placeholder="Digite seu endereço completo..."
            id="addressInput"
            className="w-full border-2 p-1 rounded my-1 drop-shadow"
          />
          <p className="text-red-500 hidden" id="addressWarn">
            Digite seu endereço completo!
          </p>
          <div className="flex items-center justify-between mt-5 w-full">
            <button
              onClick={btnFecharModal}
              id="close-modal-btn"
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-400 active:bg-red-800 drop-shadow"
            >
              Fechar
            </button>
            <button
              onClick={finalizarCompra}
              id="checkout-btn"
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-400 active:bg-green-800 drop-shadow"
            >
              Finalizar Pedidos
            </button>
          </div>
        </div>


      {/* FIM MODAL */}
      {/* <footer className="flex items-center justify-center w-full bg-red-500 py-2 fixed bottom-0 z-40 hover:bg-red-400 cursor-pointer">
        <button
          onClick={abrirModal}
          id="carrinho-btn"
          className="flex items-center gap-2 font-bold text-white"
        >
          (<span id="card-count">{totalQuantity}</span>) Ver Carrinho 🛒
        </button>
      </footer> */}

      <footer onClick={abrirModal} id="carrinho-btn" className="flex items-center justify-center w-full bg-red-500 py-2 fixed bottom-0 z-40 hover:bg-red-400 cursor-pointer gap-2 font-bold text-white">
          (<span id="card-count">{totalQuantity}</span>) Ver Carrinho 🛒
          {/* <i class="fa fa-cart-plus text-lg text-white"></i> */}
      </footer>
    </>
  );
}
