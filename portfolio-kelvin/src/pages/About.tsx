import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"
import portrait from "../assets/foto-retrato.avif"

export function About() {
  return (
    <div className="flex flex-col w-full h-dvh">
      <header>
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>

      <main className="flex flex-row w-full h-full items-center">
        <div className="flex flex-row justify-evenly w-full">
          <div className="w-3/10 lg:w-1/4 mt-1">
            <img src={portrait} alt="" className="w-5/6 rounded-xl" />
          </div>
          <div className="flex flex-col gap-3 lgscreen:gap-6">
            <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl lgscreen:text-6xl font-cinzel">
              Sobre
            </h1>
            <p className="max-w-100 md:max-w-115 lg:max-w-150 xl:max-w-180 2xl:max-w-220 text-base lg:text-lg xl:text-xl 2xl:text-2xl font-josefin font-light lgscreen:max-w-300 lgscreen:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, eum sunt. Optio ex fugiat earum tenetur laboriosam ea?
              Quasi porro accusantium culpa. Eveniet, suscipit dolore
              repudiandae ea ex voluptatum corrupti! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Atque cupiditate quae quisquam
              voluptates molestias velit impedit expedita sapiente doloremque
              fugiat magni, obcaecati quis dolore, aspernatur accusamus
              laboriosam porro tenetur maiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero tempora consectetur nihil
              consequatur iure expedita maiores eligendi voluptatibus animi sint
              autem quasi exercitationem, dolorum quas. Quae nam nulla explicabo
              recusandae? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corporis dolor impedit veniam molestiae, in laboriosam vero
              neque obcaecati consequatur maiores? Itaque odit laudantium
              aliquam dolores fuga quasi. Fuga, dolorem aperiam!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
