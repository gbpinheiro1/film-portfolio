import project1 from "../assets/still_lacos_de_natal.png"
import project2 from "../assets/truman-show.jpg"
import project3 from "../assets/still_elas_vem_de_la.png"
import project4 from "../assets/mad-max.avif"

export interface OtherProjects {
  imageSrc: string
  title: string
  alt: string
  //mesmo id que deve ir na interface de baixo e no url do project/id
  id: string
}

export interface IndividualProjects {
  videoUrl: string
  id: string
  title: string
  genre: string
  role: string
  synopsis: string
}

export const otherProjects: OtherProjects[] = [
  {
    imageSrc: project1,
    title: "Laços de Natal",
    alt: "Imagem do filme Laços de Natal",
    id: "laços-de-natal",
  },
  {
    imageSrc: project2,
    title: "Piedra Blanca",
    alt: "Imagem do clipe Piedra Blanca",
    id: "piedra-blanca",
  },
  {
    imageSrc: project3,
    title: "Elas vêm de LÁ",
    alt: "Imagem do filme Elas vêm de LÁ",
    id: "elas-vem-de-la",
  },
  {
    imageSrc: project4,
    title: "Mad Max",
    alt: "Imagem do filme Mad Max",
    id: "mad-max",
  },
]

export const projects: IndividualProjects[] = [
  {
    id: "laços-de-natal",
    videoUrl: "https://www.youtube.com/watch?v=ZdEBYYHW2qk",
    title: "Laços de Natal",
    genre: "Curta-Metragem de Suspense",
    role: "Produção Executiva, Diretor, Roteirista",
    synopsis:
      "No Natal, Lucas é atormentado por ligações anônimas que revelam um segredo sombrio escondido dentro de sua própria casa. Conforme mistério e violência se entrelaçam, ele se vê em um jogo psicológico perigoso, onde cada pista pode ser a chave para sobreviver ou a prova de sua própria culpa. “Laços de Natal” é um thriller policial que mistura suspense, investigação e drama psicológico, explorando os limites entre memória, verdade e silêncio familiar. Sobre o filme: Este curta foi realizado no Festival Curta Curto, desafio criativo que propõe a realização de um filme completo em apenas 78 horas.",
  },
  {
    id: "elas-vem-de-la",
    videoUrl: "https://vimeo.com/1045823591?fl=pl&fe=sh",
    title: "Elas vêm de LÁ",
    genre: "Curta-Metragem Documental",
    role: "Produção Executiva, Roteiro",
    synopsis:
      "Mulheres encontram empoderamento por trás do nariz vermelho e da maquiagem, mostrando o espírito lúdico e subversivo da palhaçaria feminina. Através de performances poéticas e intimistas, as palhaças compartilham histórias que vão além do riso, explorando seu papel como manipuladoras de energia e expressão.",
  },
]
