import { Link } from "react-router-dom"

type NavToMenuProps = {
  name: string
  iconSrc: string
  occupation: string
}

export function NavToMenu({ name, iconSrc, occupation }: NavToMenuProps) {
  return (
    <div className="flex fixed gap-3 p-3">
      <Link to="/menu">
        <img
          src={iconSrc}
          alt="Menu icon"
          className="w-7 cursor-pointer hover:brightness-75"
        />
      </Link>
      <div
        className="flex flex-col text-white font-cinzel  
      text-xl hover:brightness-75 cursor-pointer"
      >
        <h1>{name}</h1>
        <h2>{occupation}</h2>
      </div>
    </div>
  )
}
