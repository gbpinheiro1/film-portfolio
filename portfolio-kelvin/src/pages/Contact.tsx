import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"

export function Contact() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <NavToMenu
        name="Kelvin Andrade"
        occupation="Produtor Audiovisual"
        iconSrc={iconSrc}
      ></NavToMenu>

      <form className=" flex flex-col gap-1 bg-taupe-100 text-black w-2/3 max-w-150 px-6 py-3 rounded-lg font-jost">
        <h1 className="text-center text-3xl font-bold">Contato</h1>
        <div>
          <label htmlFor="txt-input">Nome Completo</label>
          <input
            type="text"
            id="txt-input"
            className="w-full h-10 bg-transparent border outline-zinc-300 focus:outline-blue-700 rounded-md p-4 font-inter text-md text-black mt-2"
            placeholder="Digite seu Nome"
            required
          />
        </div>

        <div className="mt-3.5">
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            className="w-full h-10 bg-transparent border outline-zinc-300 focus:outline-blue-700 rounded-md p-4 font-inter text-md text-black mt-2"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="mt-3.5">
          <label htmlFor="text-area">Mensagem</label>
          <textarea
            id="text-area"
            placeholder="Digite sua mensagem"
            required
            className="w-full bg-transparent border outline-zinc-300 focus:outline-blue-700 rounded-md p-4 font-inter text-md text-black mt-2 h-48 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full h-14 bg-black border-none rounded-md shadow-sm cursor-pointer text-lg text-white font-semibold mt-5 hover:bg-blue-700 transition-colors duration-400"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  )
}
