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

    <div className="flex flex-wrap gap-7 p-5 justify-center bg-slate-100">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  );
}
