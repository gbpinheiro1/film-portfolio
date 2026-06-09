import { Link } from "react-router-dom"

type Project = {
  imageSrc: string
  title: string
  alt: string
}

type OtherProjectsProps = {
  projects: Project[]
}

export function OtherProjects({ projects }: OtherProjectsProps) {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <header className="font-cinzel text-4xl">Projetos</header>
      <div className="flex flex-wrap w-7/10 justify-between gap-y-6">
        {projects.map((project, index) => {
          return (
            <Link
              to="local"
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
