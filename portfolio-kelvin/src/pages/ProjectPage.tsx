import { VideoPlayer } from "../components/VideoPlayer"
import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"

type Project = {
  videoUrl: string
  title: string
  genre: string
  role: string
  synopsis: string
}

type ProjectPageProps = {
  project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="flex flex-col px-2 sm:px-0 py-3 sm:py-0 gap-5 w-full">
      <div className="flex">
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </div>
      <div className="flex justify-center m-auto md:w-2/3 lg:w-1/2">
        <div className="flex flex-col gap-10">
          <VideoPlayer videoUrl={project.videoUrl} />
          <hr />
          <div className="flex gap-15 w-full">
            <div className="max-w-4/10">
              <h1 className="font-josefin font-bold text-lg">
                {project.title.toUpperCase()}
              </h1>
              <h2 className="font-josefin text-lg">{project.role}</h2>
            </div>
            <div className="max-w-6/10 flex flex-col gap-1.5 mb-1.5">
              <p className="font-josefin text-lg font-bold">{project.genre} </p>
              <p className="text-wrap overflow-hidden font-josefin">
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
        </div>
      </div>
    </div>
  )
}
