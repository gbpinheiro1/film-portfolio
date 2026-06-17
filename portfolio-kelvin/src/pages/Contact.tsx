import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"
import emailIcon from "../assets/email-icon.svg"
import whatsappIcon from "../assets/whatsapp-icon.svg"
import mapIcon from "../assets/map-icon.svg"
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
    <div className="flex flex-col justify-start h-dvh">
      <header className="p-2">
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>
      <main className="flex justify-around w-full mt-7">
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="font-bebas text-8xl max-w-2/3 mb-2">
            Entre em Contato
          </h1>
          <div className="flex font-jost text-lg font-light gap-2">
            <img src={emailIcon} alt="Ícone de e-mail" className="w-4" />
            <p>kelvinandrade@email.com</p>
          </div>
          <hr className="text-zinc-500" />

          <div className="flex font-jost text-md font-light gap-2 mt-3">
            <img src={whatsappIcon} alt="Ícone do WhatsApp" className="w-4" />
            <p>+55 (11) 912345678</p>
          </div>
          <hr className="text-zinc-500" />

          <div className="flex font-jost text-lg font-light gap-2 mt-3">
            <img
              src={mapIcon}
              alt="Ícone de marcador de mapa"
              className="w-4"
            />
            <p>São Paulo - SP</p>
          </div>
          <hr className="text-zinc-500" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col gap-1 bg-zinc-800 text-zinc-200 w-2/3 max-w-150 px-6 py-3 rounded-lg font-jost"
        >
          <h1 className="text-center text-2xl font-medium">Enviar Mensagem</h1>
          <div className="mt-2">
            <label htmlFor="txt-input">Nome Completo</label>
            <input
              type="text"
              id="txt-input"
              name="user_name"
              className="w-full h-10 bg-zinc-700 outline-none rounded-md p-4 text-md text-zinc-300 mt-2"
              placeholder="Digite seu Nome"
              required
            />
          </div>

          <div className="mt-3.5">
            <label htmlFor="email-input">Email</label>
            <input
              type="email"
              name="user_email"
              id="email-input"
              className="w-full h-10 bg-zinc-700 outline-none rounded-md p-4 text-md text-zinc-300 mt-2"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="mt-3.5">
            <label htmlFor="text-area">Mensagem</label>
            <textarea
              id="text-area"
              name="message"
              placeholder="Digite sua mensagem"
              required
              className="w-full bg-zinc-700 outline-none rounded-md px-4 py-3 text-md text-zinc-300 mt-2 h-36 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full h-14 bg-zinc-700 border-none rounded-md shadow-sm cursor-pointer text-lg text-white font-semibold mt-5 hover:bg-zinc-100 hover:text-black transition-colors duration-400"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
