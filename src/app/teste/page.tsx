"use client";
import { IBebidas } from "@/app/interfaces/interfaces";
import React from "react";

import Carousel from "../components/swiperCarousel/swiper";
import { SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import "../components/swiperCarousel/styles.css";

import Card from '@/app/components/card'

const bebidas: IBebidas[] = [
  {
    id: 1012,
    title: "Coca-Cola",
    price: 7.00,
    img: "S/Imagem",
  },
  {
    id: 1013,
    title: "Guaraná Antártica",
    price: 9.00,
    img: "S/Imagem",
  },
  {
    id: 1014,
    title: "Pepsi",
    price: 7.00,
    img: "S/Imagem",
  },
];

export default function Testing() {
  return (
    <div className="">
        {/* TESTANDO MAPEAMENTO PARA COMPONENTES */}
    <Carousel>
      {bebidas.map((bebida) => (
        <SwiperSlide key={bebida.id}>
        <div key={bebida.id}>
          <p>{bebida.title}</p>
          <p>{bebida.price}</p>
        </div>
        </SwiperSlide>
      ))}
    </Carousel>

    <div>
    <h1 className="flex justify-center text-3xl font-bold">Bebidas</h1>
    </div>

      {/* TESTANDO COMPONENTE CARD */}
    <Carousel>
    {bebidas.map((bebida) => (
        <SwiperSlide key={bebida.id}>
        <Card 
        key={bebida.id} 
        nome={bebida.title} 
        preco={bebida.price} 
        descricao='Descricao breve dos refri' 
        imagemProduto="n tem"/>
        </SwiperSlide>
    ))}
    </Carousel>

    </div>
  );
}
