import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"
import portrait from "../assets/foto-perfil-kelvin.jpg"

export function About() {
  return (
    <div className="flex flex-col w-full h-dvh not-md:h-full not-md:mb-3">
      <header>
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>

      <main className="flex md:flex-row w-full md:h-full items-center">
        <div className="flex flex-col md:flex-row md:justify-between lg:justify-evenly not-md:items-center md:px-5 lg:px-0 w-full">
          <div className="flex w-6/10 xs:w-1/2 custom:w-4/10 sm:w-35/100 md:w-3/10 xl:w-1/5 mt-4 md:mt-1 not-md:justify-center">
            <div className="w-full rounded-xl aspect-493/740">
              <img
                src={portrait}
                alt=""
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-2 lgscreen:gap-6 w-8/10 xs:w-3/4 custom:w-6/10 md:w-fit not-md:items-center hyphens-auto text-justify">
            <h1 className="text-xl xs:text-2xl xl:text-4xl lgscreen:text-5xl font-cinzel">
              Sobre
            </h1>
            <div className="flex flex-col gap-1 lg:gap-2 lgscreen:gap-6 max-w-full md:max-w-120 lg:max-w-150 xl:max-w-180 2xl:max-w-220 text-base/snug lg:text-lg xl:text-xl 2xl:text-2xl font-josefin font-light lgscreen:max-w-300 lgscreen:text-4xl">
              <p>
                Realizador audiovisual da Zona Leste de São Paulo, atuando
                principalmente nas áreas de produção, roteiro e direção,
                desenvolvendo projetos entre cinema, internet e produções
                coletivas. Integro o coletivo audiovisual SKINA, com o qual
                realizo curtas e projetos independentes que já circularam em
                festivais regionais. Tenho interesse em pesquisa e crítica de
                cinema, entendendo o audiovisual não apenas como forma de
                entretenimento, mas também como ferramenta de reflexão, educação
                e construção cultural.
              </p>
              <span>
                Para ver meu currículo completo,
                <a
                  href="https://drive.google.com/drive/folders/15N52CPaxdrl8d-ffHvkvHPdhYfnmevHR"
                  className="hover:text-amber-300"
                  target="_blank"
                >
                  {" "}
                  clique aqui.
                </a>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
