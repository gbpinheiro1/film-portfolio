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

      <main className="flex flex-1 w-full items-center justify-evenly">
        <div className="w-1/4">
          <img src={portrait} alt="" className="w-11/12 rounded-xl" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-cinzel">Sobre</h1>
          <p className="max-w-180 text-xl font-josefin font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            eum sunt. Optio ex fugiat earum tenetur laboriosam ea? Quasi porro
            accusantium culpa. Eveniet, suscipit dolore repudiandae ea ex
            voluptatum corrupti! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque cupiditate quae quisquam voluptates
            molestias velit impedit expedita sapiente doloremque fugiat magni,
            obcaecati quis dolore, aspernatur accusamus laboriosam porro tenetur
            maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Libero tempora consectetur nihil consequatur iure expedita maiores
            eligendi voluptatibus animi sint autem quasi exercitationem, dolorum
            quas. Quae nam nulla explicabo recusandae? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corporis dolor impedit veniam
            molestiae, in laboriosam vero neque obcaecati consequatur maiores?
            Itaque odit laudantium aliquam dolores fuga quasi. Fuga, dolorem
            aperiam!
          </p>
        </div>
      </main>
    </div>
  )
}
