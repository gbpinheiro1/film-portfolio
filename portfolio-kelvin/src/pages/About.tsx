import { NavToMenu } from "../components/NavToMenu"
import iconSrc from "../assets/menu-icon.svg"
import portrait from "../assets/foto-retrato.avif"

export function About() {
  return (
    <div className="flex flex-col w-full h-dvh not-md:h-full not-md:mb-3">
      <header>
        <NavToMenu
          name="Kelvin Andrade"
          occupation="Produtor Audiovisual"
          iconSrc={iconSrc}
          className="relative"
        ></NavToMenu>
      </header>

      <main className="flex md:flex-row w-full md:h-full items-center">
        <div className="flex flex-col md:flex-row md:justify-evenly not-md:items-center gap-7 md:gap-0 w-full">
          <div className="flex w-6/10 xs:w-1/2 custom:w-4/10 sm:w-35/100 md:w-3/10 lg:w-1/4 mt-4 md:mt-1 not-md:justify-center">
            <div className="w-5/6 rounded-xl aspect-493/740">
              <img
                src={portrait}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 custom:gap-3 lgscreen:gap-6m w-8/10 xs:w-3/4 custom:w-6/10 md:w-fit not-md:items-center not-md:text-justify">
            <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl lgscreen:text-6xl font-cinzel">
              Sobre
            </h1>
            <p className="max-w-full md:max-w-115 lg:max-w-150 xl:max-w-180 2xl:max-w-220 text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-josefin font-light lgscreen:max-w-300 lgscreen:text-4xl">
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
