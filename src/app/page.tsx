import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Anuncio from "@/app/components/anuncio";
import Carrinho from "@/app/components/carrinho"
import Image from "next/image";

import EsfihaQueijo from "../../../public/produtos/esfiha-queijo.png"

export default function Home() {

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
        {/* Produtos Esfiha */}
        <div className="flex flex-wrap gap-7 p-5 justify-center">
          <Card nome="Esfiha de Queijo" 
          descricao="Ta muito baratoooo! 1" 
          preco={2.50}
          imagemProduto="../../../public/produtos/esfiha-queijo.png"
          />

          <Card 
          nome="Esfiha de Carne"
          descricao="Ta muito baratoooo! 2" 
          preco= {3.00}
          imagemProduto="../../../public/produtos/esfiha-queijo.png"
          />

          <Card 
          nome="Esfiha de Calabresa"
          descricao="Ta muito baratoooo! 3" 
          preco={2.70}
          imagemProduto="../../../public/produtos/esfiha-queijo.png"
          />
        </div>
        {/* Produtos Esfiha */}
      </div>
    </main>
    {/* MODAL */}
    <div id="carrinho-modal" className="justify-center items-center w-full h-full bg-black/60 fixed top-0 left-0 z-[99] hidden">
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>

        <div id="carrinho-items" className="flex flex-col justify-between mb-2"></div>

        <p className="font-bold">Total:<span id="carrinho-total">0.00</span></p>

        <p className="font-bold mt-4">Endereço de Entrega:</p>
        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          id="address"
          className="w-full border-2 p-1 rounded my-1"
          />
          <p className="text-red-500 hidden" id="address-warn">Digite seu endereço completo!</p>

          <div className="flex items-center justify-between mt-5 w-full">
            <button id="close-modal-btn">Fechar</button>
            <button id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">Finalizar Pedidos</button>
          </div>


      </div>
    </div>
    {/* MODAL */}
    <footer className="flex items-center justify-center w-full bg-red-500 py-2 fixed bottom-0 z-40">
      <button id="carrinho-btn" className="flex items-center gap-2 font-bold text-white">
            (<span id="card-count">2</span>)
            Ver Carrinho
            {/* <i class="fa fa-cart-plus text-lg text-white"></i> */}
        </button>
    </footer>

    
    </>
  );
}
