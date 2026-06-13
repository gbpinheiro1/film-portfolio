import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage.tsx"
import { Menu } from "./pages/Menu.tsx"
import { OtherProjects } from "./pages/OtherProjects.tsx"
import { ProjectPage } from "./pages/ProjectPage.tsx"
import { projects, otherProjects } from "./data/projects"
import { RootLayout } from "./components/RootLayout.tsx"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/menu", element: <Menu /> },
      {
        path: "/projects",
        element: <OtherProjects projects={otherProjects} />,
      },
      ...projects.map((project) => ({
        path: `/projects/${project.id}`,
        element: <ProjectPage project={project} />,
      })),
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
