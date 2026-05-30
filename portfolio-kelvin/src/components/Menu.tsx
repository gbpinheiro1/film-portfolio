type MenuProps = {
  name: string
  iconSrc: string
  occupation: string
}

export function Menu({ name, iconSrc, occupation }: MenuProps) {
  return (
    <div className="flex fixed gap-3 p-3">
      <img
        src={iconSrc}
        alt="Menu icon"
        className="w-7 cursor-pointer hover:brightness-75"
      />
      <div
        className="flex flex-col text-white font-jost font-extrabold 
      text-xl hover:brightness-75 cursor-pointer"
      >
        <h1>{name}</h1>
        <h2>{occupation}</h2>
      </div>
    </div>
  )
}
