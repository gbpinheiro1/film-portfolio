import "./App.css"
import { NavToMenu } from "./components/NavToMenu"
import { MovieFrames } from "./components/MovieFrames"
import image1 from "./assets/capa-elas-vem-de-la.png"
import image2 from "./assets/capa-lacos-de-natal.png"
import image3 from "./assets/capa-mesmo-que-doa.png"
import image4 from "./assets/capa-nnds.png"
import image5 from "./assets/capa-bruxa-minhoco.png"
import image6 from "./assets/capa-piedra-blanca.png"
import image7 from "./assets/capa-eles.png"
import menuIcon from "./assets/menu-icon.svg"

function App() {
  const images = [
    { src: image1, alt: "Capa do Filme: Elas vêm de lá", id: "elas-vem-de-la" },
    { src: image2, alt: "Capa do Filme: Laços de Natal", id: "laços-de-natal" },
    { src: image3, alt: "Capa do Filme: Mesmo que Doa", id: "mesmo-que-doa" },
    {
      src: image4,
      alt: "Capa do Filme: No Norte da Saudade",
      id: "norte-da-saudade",
    },
    {
      src: image5,
      alt: "Capa do Filme: A Bruxa e o Minhoco",
      id: "a-bruxa-e-o-minhoco",
    },
    { src: image6, alt: "Capa do Filme: Piedra Blanca", id: "piedra-blanca" },
    { src: image7, alt: "Capa do Filme: Eles", id: "eles" },
  ]

  return (
    <div className="flex flex-col items-start w-full">
      <NavToMenu
        iconSrc={menuIcon}
        name="Kelvin Andrade"
        occupation="Produtor Audiovisual"
      ></NavToMenu>
      <MovieFrames images={images} />
    </div>
  )
}

export default App
