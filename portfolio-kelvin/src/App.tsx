import "./App.css"
import { NavToMenu } from "./components/NavToMenu"
import { MovieFrames } from "./components/MovieFrames"
import image1 from "./assets/godfather.png"
import image2 from "./assets/life-of-pi.jpg"
import image3 from "./assets/mad-max.avif"
import image4 from "./assets/ryangosling.jpg"
import image5 from "./assets/the-seventh-seal-chess-game.jpg"
import image6 from "./assets/truman-show.jpg"
import menuIcon from "./assets/menu-icon.svg"

function App() {
  const images = [
    { src: image1, alt: "Frame do filme: O Poderoso Chefão" },
    { src: image2, alt: "Frame do filme: A Vida de Pi" },
    { src: image3, alt: "Frame do filme: Mad Max" },
    { src: image4, alt: "Frame do filme: Blade Runner 2049" },
    { src: image5, alt: "Frame do filme: O Sétimo Selo" },
    { src: image6, alt: "Frame do filme: O Show de Truman" },
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
