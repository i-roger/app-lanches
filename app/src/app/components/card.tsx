import { CheckIcon } from '@heroicons/react/20/solid'; //npm install @heroicons/react

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Example() {
  return (
    <div className="w-[330px] h-[440px] flex flex-col bg-white rounded ring-[1px] drop-shadow-xl ring-gray-300">
        <div className="h-[400px] p-4 text-black">
            <h1 className="text-[32px]">Esfiha de Queijo</h1>
            <p>Ta muito barato! Pra sair rapido!</p>
          </div>
        <div className="w-[330px] h-[70px] p-4 flex justify-between text-black">
          <div id="preço" className="text-[32px]">
            <a>R$79,99</a>
          </div>
          <div className="flex items-center justify-center px-4 py-5 bg-[#FF870C] text-black rounded-full">
            <p>Comprar</p>
          </div>
        </div>
      </div>
  )
}
