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
    <div className="flex flex-col items-center gap-10">
      <div>
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="absolute left-2"
        ></NavToMenu>
      </div>
      <header className="flex font-cinzel text-4xl w-full items-center pt-20">
        <h1 className="m-auto">Projetos</h1>
      </header>
      <div className="flex flex-wrap w-7/10 justify-between gap-y-6">
        {projects.map((project, index) => {
          return (
            <Link
              to={project.id}
              key={index}
              className="flex flex-col gap-2 font-josefin text-sm font-bold"
            >
              <img
                src={project.imageSrc}
                alt={project.alt}
                className="w-84 aspect-video"
              />
              <h1>{project.title.toUpperCase()}</h1>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
