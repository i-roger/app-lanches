'use client'

export default function Navbar() {
  
    const abrir = () => {
        const menu = document.getElementById("menu") as HTMLElement;
        menu.classList.add('h-[100%]')
      }
    
      const fechar = () => {
        const menu = document.getElementById("menu") as HTMLElement;
        menu.classList.remove('h-[100%]')
      }

    return(
    <>
    <div className='w-full top-0 flex justify-evenly py-4 md:justify-evenly drop-shadow lg:static bg-white'> {/* Navbar */}
        <div className='flex items-center justify-center text-3xl font-bold'>
          <h1>Flash Lanches</h1>
        </div>
        <div className="hidden md:flex items-center text-black lg:flex">
            <ul className="flex items-center gap-4 lg:flex ">
                <li className="bg-black p-2 text-[#FF870C] hover:text-black hover:bg-[#FF870C] font-extrabold rounded cursor-pointer"><a>COMPRE AGORA!</a></li>
                <li className="hover:bg-[#FF870C] cursor-pointer rounded p-2"><a>Encomendas</a></li>
                <li className="hover:bg-[#FF870C] cursor-pointer rounded p-2"><a>Galeria</a></li>
                <li className="hover:bg-[#FF870C] cursor-pointer rounded p-2"><a>Contato</a></li>
            </ul>
        </div>
        

    </div>
    </>
    )
}

//Localização , reserva, galeria, loja, entre em contato, compre agora!