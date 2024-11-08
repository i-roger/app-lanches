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
        <div className='flex items-center text-3xl font-bold'>
          <h1>Flash Lanches</h1>
        </div>
        <div className="flex items-center text-black lg:flex">
            <ul className="hidden items-center gap-4 lg:flex ">
                <li className="bg-black p-2 text-[#FF870C] hover:text-black hover:bg-[#FF870C] font-extrabold rounded cursor-pointer"><a>COMPRE AGORA!</a></li>
                <li className="hover:bg-[#FF870C] cursor-pointer rounded p-2"><a>Encomendas</a></li>
                <li className="hover:bg-[#FF870C] cursor-pointer rounded p-2"><a>Galeria</a></li>
                <li className="hover:bg-[#FF870C] cursor-pointer rounded p-2"><a>Contato</a></li>
            </ul>
            <button className="p-4 rounded-full drop-shadow bg-[#FF870C] lg:hidden" onClick={abrir}>Menu</button>
        </div>
        

    </div>
      <div id="menu" className='fixed bottom-0 z-50 bg-black/70 backdrop-blur h-0 w-[100vw] text-white flex justify-center items-center text-[40px] tracking-[1px] overflow-hidden origin-bottom duration-500'>
        <button className="absolute top-[35px] right-[22px] text-[#FF870C] rounded px-2" onClick={fechar}>X</button>
        <div className="flex flex-col gap-5">
          <p className='cursor-pointer'>➡️Reserva</p>
          <p className='cursor-pointer'>➡️Galeria</p>
          <p className='cursor-pointer'>➡️Contato</p>
        </div>
      </div>
    </>
    )
}

//Localização , reserva, galeria, loja, entre em contato, compre agora!