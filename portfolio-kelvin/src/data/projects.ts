import project1 from "../assets/still_lacos_de_natal.png"
import project2 from "../assets/still-piedra-blanca.png"
import project3 from "../assets/still-elas-vem-de-la.png"
import project4 from "../assets/still-bateu.png"
import project5 from "../assets/capa-bruxa-minhoco.png"
import project6 from "../assets/still-boneca-silencio.png"
import project7 from "../assets/still-mesmo-que-doa.png"
import project8 from "../assets/still-papel.png"
import project9 from "../assets/still-norte-da-saudade.png"
import project10 from "../assets/capa-noite-na-augusta.png"
import project11 from "../assets/still-eles.png"

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
    title: "Bateu",
    alt: "Imagem do filme Bateu",
    id: "bateu",
  },
  {
    imageSrc: project5,
    title: "A Bruxa e o Minhoco",
    alt: "Imagem do filme A Bruxa e o Minhoco",
    id: "a-bruxa-e-o-minhoco",
  },
  {
    imageSrc: project6,
    title: "A Boneca e o Silêncio",
    alt: "Imagem do filme A Boneca e o Silêncio",
    id: "a-boneca-e-o-silencio",
  },
  {
    imageSrc: project7,
    title: "Mesmo que Doa",
    alt: "Imagem do filme Mesmo que Doa",
    id: "mesmo-que-doa",
  },
  {
    imageSrc: project8,
    title: "Papel",
    alt: "Imagem do videoclipe Papel",
    id: "papel",
  },
  {
    imageSrc: project9,
    title: "No Norte da Saudade",
    alt: "Imagem do filme No Norte da Saudade",
    id: "norte-da-saudade",
  },
  {
    imageSrc: project10,
    title: "Uma Noite na Augusta",
    alt: "Imagem do videoclipe Uma Noite na Augusta",
    id: "noite-na-augusta",
  },
  {
    imageSrc: project11,
    title: "Eles",
    alt: "Imagem do filme Eles",
    id: "eles",
  },
]

export const projects: IndividualProjects[] = [
  {
    id: "laços-de-natal",
    videoUrl: "https://www.youtube.com/watch?v=ZdEBYYHW2qk",
    title: "Laços de Natal (2025)",
    genre: "Curta-Metragem de Suspense",
    role: "Produção Executiva, Diretor, Roteirista",
    synopsis:
      "No Natal, Lucas é atormentado por ligações anônimas que revelam um segredo sombrio escondido dentro de sua própria casa. Conforme mistério e violência se entrelaçam, ele se vê em um jogo psicológico perigoso, onde cada pista pode ser a chave para sobreviver ou a prova de sua própria culpa. “Laços de Natal” é um thriller policial que mistura suspense, investigação e drama psicológico, explorando os limites entre memória, verdade e silêncio familiar. Sobre o filme: Este curta foi realizado no Festival Curta Curto, desafio criativo que propõe a realização de um filme completo em apenas 78 horas.",
  },
  {
    id: "elas-vem-de-la",
    videoUrl: "https://vimeo.com/1073763713/c3a461d489?fl=pl&fe=sh",
    title: "Elas vêm de LÁ (2025)",
    genre: "Curta-Metragem Documental",
    role: "Produção Executiva, Roteiro",
    synopsis:
      "Mulheres encontram empoderamento por trás do nariz vermelho e da maquiagem, mostrando o espírito lúdico e subversivo da palhaçaria feminina. Através de performances poéticas e intimistas, as palhaças compartilham histórias que vão além do riso, explorando seu papel como manipuladoras de energia e expressão.",
  },
  {
    id: "piedra-blanca",
    videoUrl: "https://vimeo.com/1073757598/0ee0cb6051?fl=pl&fe=sh",
    title: "Piedra Blanca - Umáris (2024)",
    genre: "Videoclipe",
    role: "Roteiro, Assistente de Produção",
    synopsis:
      "Pañul, uma terra regida pelos elementos que dançam ao ritmo de piedra blanca, uma garota se encontra em uma jornada onírica. Ela é guiada pela essência purificante das águas, que a prepara para um divino encontro com o solo que abriga seus antepassados enquanto os sussurros ancestrais ecoam nos sons do vento desmascarando os mistérios e segredos do local e levando-a ao fogo, que sob sua chama brilhante e dançante, emerge como um portal para sua conexão espiritual.",
  },
  {
    id: "bateu",
    videoUrl: "https://www.youtube.com/watch?v=-taWzT_giAc",
    title: "Bateu (2024)",
    genre: "Curta-Metragem de Comédia/Mistério",
    role: "Produção, Assistente de Direção",
    synopsis:
      "Um grupo de amigos encontra o corpo de Cauê em um canteiro de obras abandonado onde foram curtir. Entre tragos e risadas, o clima desaba com as acusações e desconfianças.",
  },
  {
    id: "a-bruxa-e-o-minhoco",
    videoUrl: "https://youtu.be/_EwnERy9xf8?si=2hmo5FdyiEdOVbUi",
    title: "A Bruxa e o Minhoco (2024)",
    genre: "Curta-Metragem de Ficção",
    role: "Roteirista",
    synopsis:
      "Uma bruxa solitária e uma estranha criatura se unem em uma noite mágica, onde tudo pode sair do controle.",
  },
  {
    id: "a-bruxa-e-o-minhoco",
    videoUrl: "https://youtu.be/_EwnERy9xf8?si=2hmo5FdyiEdOVbUi",
    title: "A Bruxa e o Minhoco (2024)",
    genre: "Curta-Metragem de Ficção",
    role: "Roteirista",
    synopsis:
      "Uma bruxa solitária e uma estranha criatura se unem em uma noite mágica, onde tudo pode sair do controle.",
  },
  {
    id: "a-boneca-e-o-silencio",
    videoUrl: "https://youtu.be/5x90pOIHkDY",
    title: "A Boneca e o Silêncio (2026)",
    genre: "Cena de Ficção",
    role: "Diretor de Fotografia, Logger, Decupagem",
    synopsis:
      "Trabalho de conclusão dos cursos de Direção de Arte e Direção de Fotografia do CULTSP PRO, baseado no roteiro “A Boneca e o Silêncio”, de Carol Rodrigues.",
  },
  {
    id: "mesmo-que-doa",
    videoUrl: "https://vimeo.com/1098014621?fl=pl&fe=sh",
    title: "Mesmo que Doa (2025)",
    genre: "Curta-Metragem de Ficção",
    role: "Produtor",
    synopsis:
      "Após ingerir uma pílula que o faz reviver memórias, Elias retorna ao último momento com seu primeiro amor, disposto a encarar, anos depois, o verdadeiro motivo do término. Este filme é uma produção do É NÓIS NA FITA.",
  },

  {
    id: "papel",
    videoUrl: "https://youtu.be/KVL07OEthvk?si=2z_HmtjKvU3catOQ",
    title: "Papel (2026) - Tatah Rovani & BRUFAN",
    genre: "Videoclipe",
    role: "Roteiro, 3º Assistente de Direção, Continuísta",
    synopsis: `Artistas: Tatah Rovani – Intérprete e Compositora (@tatahdasrima).\nBrufan – Produtor Musical, Intérprete e Compositor (@brufan_)\n\nUma produção de Monomito Filmes.`,
  },
  {
    id: "norte-da-saudade",
    videoUrl: "https://youtu.be/-6g1ciwA8-o?si=rJKNFY0iS8M72lqv",
    title: "No Norte da Saudade (2024)",
    genre: "Curta-Metragem Documental",
    role: "Produtor, Assistente de Direção",
    synopsis:
      "Kalú Kariú, homem trans, nortista, repleto de arte e poesia, nos convida a embarcar em uma odisseia particular atravessada por saudades e memórias que transcendem o espaço-tempo. Após 8 anos longe de casa ele relata como transforma a saudade em manancial de criação.",
  },
  {
    id: "noite-na-augusta",
    videoUrl: "https://youtu.be/qpKtiClxuco?si=ZXCkoSB_aASFRmzo",
    title: "Uma Noite na Augusta (2023)",
    genre: "Videoclipe",
    role: "Diretor, Roteirista",
    synopsis:
      "Explore a Rua Augusta e mergulhe na diversidade, diversão, magia e mistério que se desenrola ao pôr do sol. Testemunhe uma vida noturna repleta de histórias sob as luzes cintilantes desta rua icônica, capturando o contraste entre a inocência do dia e a glamourosa vida adulta da noite.",
  },
  {
    id: "eles",
    videoUrl: "https://vimeo.com/878094859?fl=pl&fe=sh",
    title: "Eles (2023)",
    genre: "Curta-Metragem de Ficção",
    role: "Roteirista, Assistente de Produção",
    synopsis:
      "Dois jovens solitários, Raul e Saul, começam a trabalhar na mesma empresa na cidade de São Paulo. Inicialmente desajustados, ambos descobrem que compartilham muito mais do que apenas nomes parecidos. O que era apenas uma amizade por conveniência do trabalho se torna uma relação que atrai olhares e sussurros de quem os cercam.",
  },
]
