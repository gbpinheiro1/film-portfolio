import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

type NavToMenuProps = {
  name: string
  iconSrc: string
  occupation: string
  className?: string
}

export function NavToMenu({
  name,
  iconSrc,
  occupation,
  className,
}: NavToMenuProps) {
  return (
    <div className={twMerge("flex fixed gap-3 p-3 items-center", className)}>
      <Link to="/menu">
        <img
          src={iconSrc}
          alt="Menu icon"
          className="w-7 cursor-pointer hover:brightness-75"
        />
      </Link>
      <Link to="/menu">
        <div
          className="flex flex-col text-white font-cinzel  
      text-xl hover:brightness-75 cursor-pointer"
        >
          <h1>{name}</h1>
          <h2>{occupation}</h2>
        </div>
      </Link>
    </div>
  )
}
