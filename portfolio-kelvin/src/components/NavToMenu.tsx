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
        "flex items-center relative justify-center w-full md:gap-1.75 md:p-3 lg:p-3 lgscreen:p-5 lgscreen:gap-3 xs:px-0 md:justify-start md:w-fit",
        className,
      )}
    >
      <div className="md:relative absolute md:left-0 left-4">
        <Link to="/menu">
          <img
            src={iconSrc}
            alt="Menu icon"
            className="w-6 xs:w-6.5 lg:w-6 xl:w-6.5 lgscreen:w-10 cursor-pointer hover:brightness-75"
          />
        </Link>
      </div>
      <div>
        <Link to="/menu">
          <div className="flex flex-col text-white font-cinzel text-xl/tight xs:text-2xl/tight p-3 items-center md:items-start md:p-0 md:text-base/tight xl:text-lg/snug lgscreen:text-3xl hover:brightness-75 cursor-pointer">
            <h1>{name}</h1>
            <h2 className="text-xs/tight md:text-base/tight xl:text-lg/snug lgscreen:text-3xl">
              {occupation}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
