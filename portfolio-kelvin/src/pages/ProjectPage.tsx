import { VideoPlayer } from "../components/VideoPlayer"
import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"

import type { IndividualProjects as Project } from "../data/projects.ts"

type ProjectPageProps = {
  project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="flex flex-col px-0 custom:px-2 sm:px-0 gap-2 sm:gap-2.5 w-full">
      <header className="flex mb-0 xs:mb-1.5 custom:mb-3 md:mb-10 xl:mb-0">
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>
      <div className="flex justify-center mx-auto w-9/10 sm:w-2/3 lg:w-1/2 mb-2 custom:mt-0 mt-3">
        <div className="flex flex-col gap-3 custom:gap-4.5">
          <VideoPlayer videoUrl={project.videoUrl} />
          <hr className="mt-6 custom:flex hidden" />
          <div className="flex flex-col custom:flex-row w-full justify-between gap-5 custom:gap-8 lg:gap-10 xl:gap-12 mt-0 xs:mt-1.5 custom:mt-0 not-custom:mb-3">
            <div className="flex flex-col not-xs:mt-1 gap-px xs:gap-0.5 custom:gap-2 max-w-full custom:w-8/10 sm:w-7/10 text-base/tight md:text-lg/tight justify-start not-custom:items-center">
              <h1 className="font-josefin font-bold text-base/tight xs:text-xl/tight not-custom:text-center lgscreen:text-3xl">
                {project.title.toUpperCase()}
              </h1>

              <p className="custom:hidden flex font-josefin text-xs text-center">
                {project.genre}
              </p>

              <h2 className="font-josefin text-sm xs:text-base lgscreen:text-3xl not-custom:mt-1 not-custom:font-bold not-custom:text-center">
                {project.role}
              </h2>
            </div>

            <div className="flex flex-col gap-1 custom:gap-2 custom:max-w-6/10">
              <p className="font-josefin font-bold text-left custom:flex hidden text-base custom:text-base/tight md:text-lg/tight lgscreen:text-3xl/tight">
                {project.genre}{" "}
              </p>

              <p className="hyphens-auto font-josefin text-sm xs:text-base lgscreen:text-2xl whitespace-pre-line not-custom:text-justify">
                <span className="not-custom:inline custom:hidden font-bold ">
                  Sinopse:{" "}
                </span>
                {project.synopsis}
              </p>
            </div>
          </div>
          <hr className="w-full custom:mb-6 custom:flex hidden" />

          {project.stillImagesSrc.map((imagesrc, index) => {
            return (
              <img
                src={imagesrc}
                alt={`Imagem still ${index + 1} de ${project.title}`}
                key={index}
                className="w-full aspect-auto"
              />
            )
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://kelvinandrade.vercel.app/projects/"
          className="font-josefin text-xs xs:text-sm md:text-base lgscreen:text-2xl text-end italic  mb-2  text-amber-300"
        >
          Ver mais projetos
        </a>
      </div>
    </div>
  )
}
