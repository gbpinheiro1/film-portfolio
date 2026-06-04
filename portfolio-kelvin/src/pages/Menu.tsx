import logoInsta from "../assets/instagram-logo.svg"
import logoLinkedin from "../assets/linkedin-logo.svg"
import logoImdb from "../assets/imdb-logo.svg"
import { Link } from "react-router-dom"

export function Menu() {
  return (
    <div className="flex flex-col justify-start items-center gap-7 h-screen">
      <Link to={"/"} className="cursor-default">
        <h1 className="text-white font-cinzel text-4xl mb-10 mt-10 cursor-pointer hover:brightness-50">
          Kelvin Andrade
        </h1>
      </Link>

      <div
        className="grid grid-cols-1 gap-7 font-josefin font-light text-4xl w-full 
      place-items-center cursor-pointer"
      >
        <Link to={"/"} className="flex justify-center w-full">
          <div
            className="relative group min-h-10 flex items-center justify-center border rounded-md p-3 w-1/2 
          overflow-hidden bg-black"
          >
            <span
              className="absolute inset-0 bg-white translate-y-full 
            group-hover:translate-y-0 transition-transform duration-400 z-0 "
            ></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-400">
              Trabalhos Selecionados
            </span>
          </div>
        </Link>

        <div
          className="relative group min-h-10 flex items-center justify-center border rounded-md p-3 w-1/2 
          overflow-hidden bg-black"
        >
          <span
            className="absolute inset-0 bg-white translate-y-full 
            group-hover:translate-y-0 transition-transform duration-400 z-0 "
          ></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-400">
            Outros Trabalhos
          </span>
        </div>

        <div
          className="relative group min-h-10 flex items-center justify-center border rounded-md p-3 w-1/2 
          overflow-hidden bg-black"
        >
          <span
            className="absolute inset-0 bg-white translate-y-full 
            group-hover:translate-y-0 transition-transform duration-400 z-0 "
          ></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-400">
            Contato
          </span>
        </div>

        <div
          className="relative group min-h-10 flex items-center justify-center border rounded-md p-3 w-1/2 
          overflow-hidden bg-black"
        >
          <span
            className="absolute inset-0 bg-white translate-y-full 
            group-hover:translate-y-0 transition-transform duration-400 z-0 "
          ></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-400">
            Sobre
          </span>
        </div>
      </div>

      <footer className="flex gap-3 justify-center items-center mt-5">
        <a href="https://www.instagram.com/" target="blank">
          <img
            src={logoInsta}
            alt=""
            className="size-10 cursor-pointer hover:brightness-50"
          />
        </a>

        <a href="https://www.linkedin.com/" target="blank">
          <img
            src={logoLinkedin}
            alt=""
            className="size-17 bg-cover bg-center grayscale contrast-500 mr-1 cursor-pointer hover:brightness-50 hover:contrast-100"
          />
        </a>

        <a href="https://www.imdb.com/pt/" target="blank">
          <img
            src={logoImdb}
            alt=""
            className="size-9 hover:brightness-50 cursor-pointer brightness-125"
          />
        </a>
      </footer>
    </div>
  )
}
