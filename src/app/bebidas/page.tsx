"use client";
import { IBebidas } from "@/app/interfaces/interfaces";
import React from "react";
// import "swiper/css";
// import "swiper/css/pagination";
import "../components/swiperCarousel/styles.css";

import Navbar from '@/app/components/navbar'

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

export default function uisimples() {
  return (
    <>
    <div className="">
      <h1 className="text-3xl text-center font-bold">Bebidas</h1>
    </div>
    <div className="flex flex-col gap-2">
    {bebidas.map((bebida) => (
      <div className="bg-stone-300" key={bebida.id}>
        <div>
          <p>{bebida.id}</p>
          <p>{bebida.title}</p>
          <p>R$ {bebida.price}</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-green-400">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    ))}
    </div>
    </>
  );
}
