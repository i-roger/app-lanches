import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Anuncio from "@/app/components/anuncio";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="">
      <Navbar />
    </main>
    <section>
      <Card />
      <Anuncio />
    </section>
    <section className="flex p-5 justify-center bg-slate-200">
    <div className="w-[330px] h-[440px] flex flex-col bg-white rounded ring-[1px] drop-shadow-xl ring-gray-300">
      
      <div className="h-[400px] p-4 text-black">
          <h1 className="text-[32px]">Hello World</h1>
          <p>asdasdas</p>
        </div>
      <div className="w-[330px] h-[70px] p-4 flex justify-between text-black">
        <div id="preço" className="">
          <a>R$79,99</a>
        </div>
        <div className="flex items-center justify-center px-4 py-5 bg-[#0070F0] text-white rounded-full">
          <p>Comprar</p>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
