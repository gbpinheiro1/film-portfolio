import { VideoPlayer } from "../components/VideoPlayer"
import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"

import type { IndividualProjects as Project } from "../data/projects.ts"

type ProjectPageProps = {
  project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="flex flex-col px-2 sm:px-0 py-3 sm:py-0 gap-5 w-full">
      <header className="flex">
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>
      <div className="flex justify-center mx-auto md:w-2/3 lg:w-1/2 mb-3">
        <div className="flex flex-col gap-3">
          <VideoPlayer videoUrl={project.videoUrl} />
          <hr className="mt-6" />
          <div className="flex w-full mt-1 gap-15">
            <div className="max-w-4/10">
              <h1 className="font-josefin font-bold text-lg">
                {project.title.toUpperCase()}
              </h1>
              <h2 className="font-josefin text-lg">{project.role}</h2>
            </div>
            <div className="flex flex-col flex-1 hyphens-auto text-justify gap-1">
              <p className="font-josefin text-lg font-bold">{project.genre} </p>
              <p className="text-wrap overflow-hidden font-josefin whitespace-pre-line">
                {project.synopsis}
              </p>
              <a
                href="/projects"
                className="font-josefin text-sm text-end italic mt-5 text-amber-300"
              >
                Ver mais projetos
              </a>
            </div>
          </div>
          <hr className="mb-6" />
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
    </div>
  )
}
