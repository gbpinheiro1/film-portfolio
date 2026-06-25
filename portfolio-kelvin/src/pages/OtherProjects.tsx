import { Link } from "react-router-dom"
import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"

type Project = {
  imageSrc: string
  title: string
  alt: string
  id: string
}

type OtherProjectsProps = {
  projects: Project[]
}

export function OtherProjects({ projects }: OtherProjectsProps) {
  return (
    <div className="flex flex-col items-center gap-6 custom:gap-10">
      <header className="w-full md:mb-5 custom:mb-3 mb-0">
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>
      <div className="flex font-cinzel not-custom:text-3xl text-4xl lgscreen:text-5xl w-full items-center">
        <h1 className="m-auto">Projetos</h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-11 md:grid-cols-2 md:grid-rows-6 xl:grid-rows-4 xl:grid-cols-3 gap-x-6 md:gap-y-10 gap-y-7 mb-9 mx-auto">
        {projects.map((project, index) => {
          return (
            <Link
              to={project.id}
              key={index}
              className="flex flex-col gap-2 lgscreen:gap-3 lgscreen:mb-2 font-josefin text-sm lgscreen:text-xl font-bold px-5 sm:px-0"
            >
              <img
                src={project.imageSrc}
                alt={project.alt}
                className="w-84 lgscreen:w-140 aspect-video"
              />
              <h1>{project.title.toUpperCase()}</h1>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
