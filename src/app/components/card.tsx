import Image from "next/image"
import EsfihaQueijo from "../../../public/produtos/esfiha-queijo.png"
import { CheckIcon } from '@heroicons/react/20/solid'; //npm install @heroicons/react

interface Props {
    nome: string,
    descricao: string,
    preco: number,
    imagemProduto: string
  }

export default function Card (props: Props) {

  return(
    <div className="w-[330px] flex justify-between flex-col bg-white rounded ring-[1px] drop-shadow-xl ring-gray-300">
        {/* Nome e Descrição */}
        <div className="p-4 text-black">
            <h1 className="text-[32px] font-bold">{props.nome}</h1>
            <p>{props.descricao}</p>
          </div>
        {/* Nome e Descrição */}

        {/* Imagem do Produto */}
          <div className="flex justify-center">
            <Image
              src={EsfihaQueijo}
              width={300}
              alt="Picture of the author"
            />
          </div>
        {/* Imagem do Produto */}

        {/* Container Preço */}
        <div className="w-[330px] h-[70px] p-4 flex justify-between text-black">
          <div id="preço" className="flex items-center justify-center text-[32px]">
            <p>R${props.preco}</p>
          </div>
          <div className="flex items-center justify-center px-4 py-5 text-sm font-bold bg-[#FF870C] text-black rounded-full">
              <button
              data-name={props.nome}
              data-price={props.preco}>
                COMPRAR
              </button>
            </div>
         </div>
        {/* Container Preço */}
      </div>
  )
}