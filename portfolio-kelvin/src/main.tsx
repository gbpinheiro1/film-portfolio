import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage.tsx"
import { Menu } from "./pages/Menu.tsx"
import { OtherProjects } from "./pages/OtherProjects.tsx"
import project1 from "./assets/godfather.png"
import project2 from "./assets/truman-show.jpg"
import project3 from "./assets/the-seventh-seal-chess-game.jpg"
import project4 from "./assets/mad-max.avif"

const otherProjects = [
  {
    imageSrc: project1,
    title: "O Poderoso Chefão",
    alt: "Imagem do filme O Poderoso Chefão",
  },

  {
    imageSrc: project2,
    title: "O Show de Truman",
    alt: "Imagem do filme O Show de Truman",
  },

  {
    imageSrc: project3,
    title: "O Sétimo Selo",
    alt: "Imagem do filme O Sétimo Selo",
  },

  {
    imageSrc: project4,
    title: "Mad Max",
    alt: "Imagem do filme Mad Max",
  },
]

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/projects"
          element={<OtherProjects projects={otherProjects} />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
