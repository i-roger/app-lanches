// Não está funcional, primeiro verificar como fazer a conexão desse componente com a 
// página principal e suas funções.
// ERRO: Ao clicar em adicionar ao Carrinho, Array duplicado para o funcionamento do Slide.


import React from "react";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiperCarousel/styles.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import handleAddToCart from '../../page'
import { IBook, IShoppingCartItem } from "../../interfaces/interfaces";

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
    descricao: "",
    price: 8.99,
    img: "/produtos/esfiha-queijo.png",
  },
  {
    id: 3,
    title: "Esfiha de Calabresa",
    descricao: "",
    price: 90.99,
    img: "/produtos/esfiha-queijo.png",
  },
];

export default function Carousel(props:{}) {
  return (
    <div className="p-4">
      <Swiper
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[100%] h-[100%] rounded-[30px]"
      >
        
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div
              key={book.id}
              className="w-[330px] flex justify-between flex-col bg-white rounded ring-[1px] drop-shadow ring-gray-300 mb-10"
            >
              <div className="p-4 ">
                <p className="text-[32px] font-bold">{book.title}</p>
                <p>{book.descricao}</p>
              </div>
              <div className="flex justify-center">
                <Image width={300} height={300} alt="" src={book.img} />
              </div>
              <div className="bg-zinc-100 h-[70px] p-4 flex justify-between">
                <div
                  id="preço"
                  className="flex items-center justify-center text-[24px]"
                >
                  <p>
                    {book.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <button
                  className="flex items-center justify-center px-2 py-5 text-sm font-bold bg-[#FF870C] hover:bg-[#ff9b37] active:bg-[#b96816] rounded-full"
                  onClick={() => handleAddToCart(book.id)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}
