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
    { src: image1, alt: "Capa do Filme: Elas vêm de lá" },
    { src: image2, alt: "Capa do Filme: Laços de Natal" },
    { src: image3, alt: "Capa do Filme: Mesmo que Doa" },
    { src: image4, alt: "Capa do Filme: No Norte da Saudade" },
    { src: image5, alt: "Capa do Filme: A Bruxa e o Minhoco" },
    { src: image6, alt: "Capa do Filme: Piedra Blanca" },
    { src: image7, alt: "Capa do Filme: Eles" },
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
