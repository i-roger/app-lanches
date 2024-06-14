export default function Navbar() {
    return(
    <div className="flex justify-between items-center px-4 py-4 text-[27px] max-sm:hidden">
        <div className="">
            <a>MC</a>
        </div>
        <div>
            <ul className="flex flex-row items-center gap-4">
                <li className="bg-red-600 p-2 text-yellow-300 font-extrabold"><a>Compre Agora!</a></li>
                <li><a>Reserva</a></li>
                <li><a>Galeria</a></li>
                <li><a>Entre em contato</a></li>
                <li><a>LOJA?</a></li>
            </ul>
        </div>
    </div>
    )
}
//Localização , reserva, galeria, loja, entre em contato, compre agora!