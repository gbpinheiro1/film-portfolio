import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import type { SubmitEvent } from "react"

export function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault() //Previnir que a página inteira recarregue quando enviar a mensagem

    emailjs
      .sendForm(
        "service_vyaayvo",
        "template_byi6r3r",
        form.current!, //Evitar que seja null
        "e9dVBKzW6cFHYQ923",
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!")
          form.current!.reset()
        },
        (error) => {
          alert(
            `Erro ao enviar a mensagem, por favor tente novamente. ${error.text}`,
          )
        },
      )
  }

  return (
    <div className="flex flex-col justify-start h-dvh not-sm:mb-5 not-sm:h-fit">
      <header className="sm:pl-2 not-sm:pl-0">
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>
      <main className="flex not-sm:flex-col justify-around items-center w-full sm:h-full lgscreen:justify-evenly sm:gap-0 gap-10 not-sm:mt-5">
        <div className="flex flex-col gap-2.5 lgscreen:gap-5 justify-center w-3/4 sm:w-35/100 xl:w-3/10 lgscreen:w-1/4 custom:w-2/3 not-lg:gap-0.5">
          <h1 className="font-bebas max-w-12/12 lg:max-w-10/12 text-6xl md:text-7xl lg:text-8xl lgscreen:text-9xl mb-2 not-sm:text-center not-sm:text-4xl not-sm:mt-5">
            Entre em Contato
          </h1>
          <div className="flex items-center font-jost text-base sm:text-lg lg:text-xl lgscreen:text-3xl font-light gap-1.5 lgscreen:gap-2.5 sm:pl-1.25">
            <div className="bg-[url(assets/email-icon.svg)] not-md:mb-0.5 size-2.5 w-3 bg-cover bg-no-repeat bg-center lgscreen:size-4.5 lgscreen:w-5"></div>
            <p>kelvinandrade@email.com</p>
          </div>
          <hr className="text-zinc-500 sm:mx-1.25" />

          <div className="flex items-center font-jost text-sm sm:text-base lg:text-lg font-light lgscreen:text-3xl gap-1 lgscreen:gap-2.5 mt-2.5 sm:mt-4 sm:pl-1.25 [word-spacing:-0.15rem]">
            <div className="bg-[url(assets/whatsapp-icon.svg)] not-md:mb-0.5 size-3 w-3 bg-cover bg-no-repeat bg-center lgscreen:size-5 lgscreen:w-5"></div>
            <p>+55 (11) 912345678</p>
          </div>
          <hr className="text-zinc-500 sm:mx-1.25" />

          <div className="flex items-center font-jost text-base sm:text-lg lg:text-xl lgscreen:text-3xl font-light gap-1.5 lgscreen:gap-2.5 mt-2.5 sm:mt-4 sm:pl-1.25 [word-spacing:-0.15rem]">
            <div className="bg-[url(assets/map-icon.svg)] not-md:mb-0.5 size-3.75 w-3 bg-contain bg-no-repeat bg-center lgscreen:size-6.5 lgscreen:w-5"></div>
            <p>São Paulo - SP</p>
          </div>
          <hr className="text-zinc-500 sm:mx-1.25" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col gap-1 bg-zinc-800 text-zinc-200 w-3/4 custom:w-2/3 sm:w-1/2 md:w-45/100 lg:w-2/5 lgscreen:w-1/3 px-6 lgscreen:px-8 py-3 lgscreen:py-6 lgscreen:gap-5 rounded-lg font-jost"
        >
          <h1 className="text-center text-xl lgscreen:text-3xl font-medium">
            Enviar Mensagem
          </h1>
          <div className="mt-3">
            <label htmlFor="txt-input" className="text-sm lgscreen:text-xl">
              Nome Completo
            </label>
            <input
              type="text"
              id="txt-input"
              name="user_name"
              className="w-full h-8 lg:h-10  text-zinc-300  bg-zinc-700 outline-none rounded-md p-3 lg:p-4 text-sm lg:text-base lgscreen:h-14 lgscreen:text-lg mt-2"
              placeholder="Digite seu Nome"
              required
            />
          </div>

          <div className="mt-3.5">
            <label htmlFor="email-input" className="text-sm lgscreen:text-xl">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email-input"
              className="w-full h-8 lg:h-10 bg-zinc-700 outline-none rounded-md p-3 lg:p-4 text-sm lg:text-base text-zinc-300 mt-2 lgscreen:h-14 lgscreen:text-lg"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="mt-3.5">
            <label htmlFor="text-area" className="text-sm lgscreen:text-xl">
              Mensagem
            </label>
            <textarea
              id="text-area"
              name="message"
              placeholder="Digite sua mensagem"
              required
              className="w-full bg-zinc-700 outline-none rounded-md p-3 text-sm lg:text-base text-zinc-300 mt-2 h-24 lg:h-36 resize-none lgscreen:h-14 lgscreen:text-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full h-10 lgscreen:h-15 bg-zinc-700 border-none rounded-md shadow-sm cursor-pointer text-base lgscreen:text-xl text-white font-semibold mt-5 lgscreen:mt-15 hover:bg-zinc-100 hover:text-black transition-colors duration-400"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
