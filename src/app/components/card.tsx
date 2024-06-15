import Image from "next/image"
import EsfihaQueijo from "../../../public/produtos/esfiha-queijo.png"
import { CheckIcon } from '@heroicons/react/20/solid'; //npm install @heroicons/react

export default function Example() {
  return (
    <div className="w-[330px] flex flex-col bg-white rounded ring-[1px] drop-shadow-xl ring-gray-300">

        <div className="p-4 text-black">
            <h1 className="text-[32px] font-bold">Esfiha de Queijo</h1>
            <p>Ta muito barato! Pra sair rapido!</p>
          </div>

          <div className="flex justify-center">
          <Image
            src={EsfihaQueijo}
            width={300}
            alt="Picture of the author"
          />
          </div>

        <div className="w-[330px] h-[70px] p-4 flex justify-between text-black">
          <div id="preço" className="flex items-center justify-center text-[32px]">
            <p>R$79,99</p>
          </div>
          <div className="flex items-center justify-center px-4 py-5 text-sm font-bold bg-[#FF870C] text-black rounded-full">
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
  )
}
