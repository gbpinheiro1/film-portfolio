import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage.tsx"
import { Menu } from "./pages/Menu.tsx"
import { OtherProjects } from "./pages/OtherProjects.tsx"
import { ProjectPage } from "./pages/ProjectPage.tsx"
import { projects, otherProjects } from "./data/projects"

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

        {projects.map((project) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            element={<ProjectPage project={project} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
