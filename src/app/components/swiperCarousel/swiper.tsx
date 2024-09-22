// Não está funcional, primeiro verificar como fazer a conexão desse componente com a
// página principal e suas funções.
// ERRO: Ao clicar em adicionar ao Carrinho, Array duplicado para o funcionamento do Slide.

import React from "react";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiperCarousel/styles.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { ReactNode } from "react";

interface SliderProps {
  children: ReactNode;
}

export default function Carousel({ children }: SliderProps) {
  return (
    <div className="py-4">
      <Swiper
        slidesPerView={1.2} //Mobile First
        breakpoints={
          {
            640: { // Responsividade definida para 640px >= 
              slidesPerView: 2
            }
          }
        }
        spaceBetween={0}
         //Espaço entre os itens dentro do slider
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
        className=""
      >
        {children}
      </Swiper>
    </div>
  );
}
