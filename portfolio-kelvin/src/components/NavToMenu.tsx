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
    <div
      className={twMerge(
        "flex items-center relative justify-center w-full md:gap-3 md:p-3 xs:px-0 md:justify-start md:w-fit",
        className,
      )}
    >
      <div className="md:relative absolute md:left-0 left-4">
        <Link to="/menu">
          <img
            src={iconSrc}
            alt="Menu icon"
            className="w-6 xs:w-6.5 md:w-7 cursor-pointer hover:brightness-75"
          />
        </Link>
      </div>
      <div>
        <Link to="/menu">
          <div className="flex flex-col text-white font-cinzel text-xl xs:text-2xl p-3 items-center md:items-start md:p-0 custom:text-2xl md:text-xl hover:brightness-75 cursor-pointer">
            <h1>{name}</h1>
            <h2 className="text-xs md:text-xl">{occupation}</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
