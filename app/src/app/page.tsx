import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Anuncio from "@/app/components/anuncio";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex justify-center">
      <Navbar />
    </main>
    <section>
      <Card />
      <Anuncio />
    </section>
    </>
  );
}
