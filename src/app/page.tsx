import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Anuncio from "@/app/components/anuncio";
import Carrinho from "@/app/components/carrinho"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      {/* Produtos */}
      <div className="flex flex-wrap gap-7 p-5 justify-center bg-slate-100">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Carrinho />
    </main>

    
    </>
  );
}
