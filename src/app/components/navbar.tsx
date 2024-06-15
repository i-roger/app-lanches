import Image from 'next/image'
import Logo from "../../../public/LogoMeC.png"
export default function Navbar() {
    return(
    <div className="flex justify-between items-center px-7 py-4 text-[22px] bg-white">
        <div className="">
        <Image className=""
      src={Logo}
      width={300}
      alt="Picture of the author"
    />
        </div>
        <div>
            <ul className="flex flex-row items-center gap-4 text-black">
                <li className="bg-black p-2 text-[#FF870C] font-extrabold rounded cursor-pointer">
                    <button>COMPRE AGORA!</button>
                </li>
                <li className="hover:bg-[#FF870C]"><a>RESERVA</a></li>
                <li><a>GALERIA</a></li>
                <li><a>ENTRE EM CONTATO</a></li>
                <li><a>LOJA?</a></li>
            </ul>
        </div>
    </div>
    )
}

//Localização , reserva, galeria, loja, entre em contato, compre agora!