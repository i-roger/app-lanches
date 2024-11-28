"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { ulid } from 'ulid';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/app/components/swiperCarousel/styles.css";

// import required modules

import { Iproduto, IShoppingCartItem } from "@/app/interfaces/interfaces";

const produtos: Iproduto[] = [
  {
    tipo: "promocao",
    id: ulid(),
    title: "20 Esfihas de queijo",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 71.82,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    tipo: "promocao",
    id: ulid(),
    title: "20 Esfihas de carne",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 89.99,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    tipo: "bebida",
    id: ulid(),
    title: "Coca-Cola",
    descricao: "",
    price: 12.0,
    img: "/bebidas/pepsi-lata.png",
  },
  {
    tipo: "bebida",
    id: ulid(),
    title: "Pepsi",
    descricao: "",
    price: 12.0,
    img: "/bebidas/pepsi-lata.png",
  },
  {
    tipo: "comida",
    id: ulid(),
    title: "Esfiha de Queijo",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 3.99,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    tipo: "comida",
    id: ulid(),
    title: "Esfiha de Carne",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 8.99,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    tipo: "comida",
    id: ulid(),
    title: "Esfiha de Calabresa",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 6.99,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    tipo: "comida",
    id: ulid(),
    title: "Esfiha de Frango",
    descricao: "A melhor esfiha de queijo que você vai provar!",
    price: 4.99,
    img: "/produtos/esfiha-queijo.png",
  },
];

const promocao = produtos.filter((x) => x.tipo === "promocao");

const bebidas = produtos.filter((x) => x.tipo === "bebida");

const comidas = produtos.filter((x) => x.tipo === "comida");

export default function Home() {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

  const handleAddToCart = (id: any) => {
    const produto = produtos.find((produto) => produto.id === id);

    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );

    // if produto is in the shopping cart
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

    // if produto is not in the shopping cart

    const cartItem: IShoppingCartItem = {
      product: produto!,
      quantity: 1,
    };
    const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem];
    setShoppingCart(newShoppingCart);
  };

  const handleRemoveFromCart = (id: any) => {
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

    const cartItems = shoppingCart.map((item) => {
      return (`${item.product.title} ---> Quantidade: (${item.quantity}) Preço: R$${item.product.price}) | `
      )
    }).join("")

    const message = encodeURIComponent(cartItems)
    const celular = 21999055127
    console.log(cartItems)

    // window.open(`https://wa.me/${celular}?text=${message} Endereço: ${addressInput.value} | \n Total: ${totalCart}`, "_blank")
    window.open(`https://api.whatsapp.com/send/?phone=${celular}&text=${message}&type=phone_number&app_absent=0`, "_blank")
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center p-4 gap-4">

        <div className="flex flex-col items-center justify-center">
        <a className="text-center" href="#bebidas">
          <div className="flex flex-col items-center justify-center bg-red-500 w-20 h-20 rounded-full">ICONE</div>
        Bebidas</a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a className="text-center" href="#comidas">
            <div className="flex flex-col items-center justify-center bg-green-500 w-20 h-20 rounded-full">ICONE</div>
          Comida</a>
        </div>

      </div>

      <div id="wrapper" className="flex flex-col gap-8 pb-20">

      <div> {/* SEÇÃO DE PROMOÇÕES */}
          <div className="flex justify-center py-4">
            <h1 id="comidas" className="text-3xl text-black font-bold">Promoções</h1>
          </div>
          {/* Cards */}
          <div id="card" className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:items-stretch md:flex-wrap">
            {promocao.map((produto) => (
              <div
                key={produto.id}
                className="flex w-full bg-white rounded ring-[1px] drop-shadow p-4 ring-gray-300 md:w-[400px]"
              >
                <div className="flex flex-col w-full gap-4">
                  
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-center">
                      <p className="text-xl font-bold">{produto.title}</p>
                      <p>{produto.descricao}</p>
                    </div>
                    <div className="flex justify-end">
                      <Image width={128} height={128} alt="" src={produto.img} />
                    </div>
                  </div>

                  <div
                    id="preço"
                    className="flex justify-between text-[24px] font-bold"
                  >
                    <p>
                      {produto.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <button
                      className="p-2 text-sm font-bold bg-[#FF870C] hover:bg-[#ff9b37] active:bg-[#b96816] rounded-full"
                      onClick={() => handleAddToCart(produto.id)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
                {/* final cartao */}
              </div>
            ))}
          </div>
        </div>
        {/* FIM SEÇÃO DE PROMOÇÕES */}

        <div> {/* SEÇÃO DE COMIDAS */}
          <div className="flex justify-center py-4">
            <h1 id="comidas" className="text-3xl text-black font-bold">Esfihas por unidade</h1>
          </div>
          {/* Cards */}
          <div id="card" className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:items-stretch md:flex-wrap">
            {comidas.map((produto) => (
              <div
                key={produto.id}
                className="flex w-full bg-white rounded ring-[1px] drop-shadow p-4 ring-gray-300 md:w-[400px]"
              >
                <div className="flex flex-col w-full gap-4">
                  
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-center">
                      <p className="text-xl font-bold">{produto.title}</p>
                      <p>{produto.descricao}</p>
                    </div>
                    <div className="flex justify-end">
                      <Image width={128} height={128} alt="" src={produto.img} />
                    </div>
                  </div>

                  <div
                    id="preço"
                    className="flex justify-between text-[24px] font-bold"
                  >
                    <p>
                      {produto.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <button
                      className="p-2 text-sm font-bold bg-[#FF870C] hover:bg-[#ff9b37] active:bg-[#b96816] rounded-full"
                      onClick={() => handleAddToCart(produto.id)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
                {/* final cartao */}
              </div>
            ))}
          </div>
        </div>
        {/* FIM SEÇÃO DE COMIDAS */}

        <div> {/* SEÇÃO DE BEBIDAS */}
          <div className="flex justify-center py-4">
            <h1 id="bebidas" className="text-3xl text-black font-bold">Bebidas</h1>
          </div>
          {/* Cards */}
          <div id="card" className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:items-stretch">
            {bebidas.map((produto) => (
              <div
                key={produto.id}
                className="flex w-full bg-white rounded ring-[1px] drop-shadow p-4 ring-gray-300 md:w-[400px]"
              >
                <div className="flex flex-col w-full gap-4">
                  
                  <div className="flex justify-between">
                    <div className="w-[50%] flex flex-col justify-center">
                      <p className="text-xl font-bold">{produto.title}</p>
                      <p>{produto.descricao}</p>
                    </div>
                    <div className="w-[50%] flex justify-end">
                      <Image width={48} height={96} alt="" src={produto.img} />
                    </div>
                  </div>

                  <div
                    id="preço"
                    className="flex justify-between text-[24px] font-bold"
                  >
                    <p>
                      {produto.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <button
                      className="p-2 text-sm font-bold bg-[#FF870C] hover:bg-[#ff9b37] active:bg-[#b96816] rounded-full"
                      onClick={() => handleAddToCart(produto.id)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
                {/* final cartao */}
              </div>
            ))}
          </div>
        </div>
        {/* FIM SEÇÃO DE BEBIDAS */}
        

      </div>
      {/* FINAL WRAPPER */}






      {/* MODAL */}
      <div
        id="scroll-modal"
        className="scroll-modal translate-y-[100%] flex-col w-full h-full bg-white p-5 fixed top-0 left-0 z-[99] overflow-y-auto flex"
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
                <div className="flex justify-center w-[48px] p-2">
                <Image
                  alt=""
                  width={300}
                  height={300}
                  src={item.product.img}
                />
                </div>
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
      <footer
        onClick={abrirModal}
        id="carrinho-btn"
        className="flex items-center justify-center w-full bg-red-500 py-2 fixed bottom-0 z-40 hover:bg-red-400 cursor-pointer gap-2 font-bold text-white"
      >
        (<span id="card-count">{totalQuantity}</span>) Ver Carrinho 🛒
        {/* <i class="fa fa-cart-plus text-lg text-white"></i> */}
      </footer>
    </>
  );
}
