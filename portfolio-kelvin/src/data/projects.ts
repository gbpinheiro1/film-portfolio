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

//Laços de Natal
import layoutStill1 from "../assets/capa-lacos-de-natal.png"
import layoutStill2 from "../assets/layout-still-lacos-de-natal-1.png"
import layoutStill3 from "../assets/layout-still-lacos-de-natal-2.png"

//Elas vêm de lá
import layoutStill4 from "../assets/still-elas-vem-de-la.png"
import layoutStill5 from "../assets/layout-still-elas-vem-de-la-1.png"
import layoutStill6 from "../assets/layout-still-elas-vem-de-la-2.png"

//Piedra Blanca
import layoutStill7 from "../assets/capa-piedra-blanca.png"
import layoutStill8 from "../assets/still-piedra-blanca.png"
import layoutStill9 from "../assets/layout-still-piedra-blanca-1.png"
import layoutStill10 from "../assets/layout-still-piedra-blanca-2.png"

//Bateu
import layoutStill11 from "../assets/capa-bateu.png"
import layoutStill12 from "../assets/layout-still-bateu-1.png"
import layoutStill13 from "../assets/layout-still-bateu-2.png"

// A Bruxa e o Minhoco
import layoutStill14 from "../assets/layout-still-bruxa-minhoco-1.png"
import layoutStill15 from "../assets/layout-still-bruxa-minhoco-2.png"
import layoutStill16 from "../assets/layout-still-bruxa-minhoco-3.png"
import layoutStill17 from "../assets/layout-still-bruxa-minhoco-4.png"

// A Boneca e o Silêncio
import layoutStill18 from "../assets/still-boneca-silencio.png"
import layoutStill19 from "../assets/layout-still-boneca-silencio-1.png"
import layoutStill20 from "../assets/layout-still-boneca-silencio-2.png"

// Mesmo que Doa
import layoutStill21 from "../assets/still-mesmo-que-doa.png"
import layoutStill22 from "../assets/layout-still-mesmo-que-doa.png"

// Papel
import layoutStill23 from "../assets/still-papel.png"
import layoutStill24 from "../assets/layout-still-papel-1.png"
import layoutStill25 from "../assets/layout-still-papel-2.png"
import layoutStill26 from "../assets/layout-still-papel-3.png"
import layoutStill27 from "../assets/layout-still-papel-4.png"

// No Norte da Saudade
import layoutStill28 from "../assets/still-norte-da-saudade.png"
import layoutStill29 from "../assets/layout-still-norte-da-saudade-1.png"

// Uma Noite Na Augusta
import layoutStill30 from "../assets/layout-still-noite-na-augusta-1.png"
import layoutStill31 from "../assets/layout-still-noite-na-augusta-2.png"
import layoutStill32 from "../assets/layout-still-noite-na-augusta-3.png"

//Eles
import layoutStill33 from "../assets/layout-still-eles.png"

export type OtherProjects = {
  imageSrc: string
  title: string
  alt: string
  //mesmo id que deve ir na interface de baixo e no url do project/id
  id: string
}

export type IndividualProjects = {
  videoUrl: string
  id: string
  title: string
  genre: string
  role: string
  synopsis: string
  stillImagesSrc: string[]
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
    stillImagesSrc: [layoutStill1, layoutStill2, layoutStill3],
  },
  {
    id: "elas-vem-de-la",
    videoUrl: "https://vimeo.com/1073763713/c3a461d489?fl=pl&fe=sh",
    title: "Elas vêm de LÁ (2025)",
    genre: "Curta-Metragem Documental",
    role: "Produção Executiva, Roteiro",
    synopsis:
      "Mulheres encontram empoderamento por trás do nariz vermelho e da maquiagem, mostrando o espírito lúdico e subversivo da palhaçaria feminina. Através de performances poéticas e intimistas, as palhaças compartilham histórias que vão além do riso, explorando seu papel como manipuladoras de energia e expressão.",
    stillImagesSrc: [layoutStill4, layoutStill5, layoutStill6],
  },
  {
    id: "piedra-blanca",
    videoUrl: "https://vimeo.com/1073757598/0ee0cb6051?fl=pl&fe=sh",
    title: "Piedra Blanca - Umáris (2024)",
    genre: "Videoclipe",
    role: "Roteiro, Assistente de Produção",
    synopsis:
      "Pañul, uma terra regida pelos elementos que dançam ao ritmo de piedra blanca, uma garota se encontra em uma jornada onírica. Ela é guiada pela essência purificante das águas, que a prepara para um divino encontro com o solo que abriga seus antepassados enquanto os sussurros ancestrais ecoam nos sons do vento desmascarando os mistérios e segredos do local e levando-a ao fogo, que sob sua chama brilhante e dançante, emerge como um portal para sua conexão espiritual.",
    stillImagesSrc: [layoutStill7, layoutStill8, layoutStill9, layoutStill10],
  },
  {
    id: "bateu",
    videoUrl: "https://www.youtube.com/watch?v=-taWzT_giAc",
    title: "Bateu (2024)",
    genre: "Curta-Metragem de Comédia/Mistério",
    role: "Produção, Assistente de Direção",
    synopsis:
      "Um grupo de amigos encontra o corpo de Cauê em um canteiro de obras abandonado onde foram curtir. Entre tragos e risadas, o clima desaba com as acusações e desconfianças.",
    stillImagesSrc: [layoutStill11, layoutStill12, layoutStill13],
  },
  {
    id: "a-bruxa-e-o-minhoco",
    videoUrl: "https://youtu.be/_EwnERy9xf8?si=2hmo5FdyiEdOVbUi",
    title: "A Bruxa e o Minhoco (2024)",
    genre: "Curta-Metragem de Ficção",
    role: "Roteirista",
    synopsis:
      "Uma bruxa solitária e uma estranha criatura se unem em uma noite mágica, onde tudo pode sair do controle.",
    stillImagesSrc: [
      layoutStill14,
      layoutStill15,
      layoutStill16,
      layoutStill17,
    ],
  },
  {
    id: "a-boneca-e-o-silencio",
    videoUrl: "https://youtu.be/5x90pOIHkDY",
    title: "A Boneca e o Silêncio (2026)",
    genre: "Cena de Ficção",
    role: "Diretor de Fotografia, Logger, Decupagem",
    synopsis:
      "Trabalho de conclusão dos cursos de Direção de Arte e Direção de Fotografia do CULTSP PRO, baseado no roteiro “A Boneca e o Silêncio”, de Carol Rodrigues.",
    stillImagesSrc: [layoutStill18, layoutStill19, layoutStill20],
  },
  {
    id: "mesmo-que-doa",
    videoUrl: "https://vimeo.com/1098014621?fl=pl&fe=sh",
    title: "Mesmo que Doa (2025)",
    genre: "Curta-Metragem de Ficção",
    role: "Produtor",
    synopsis:
      "Após ingerir uma pílula que o faz reviver memórias, Elias retorna ao último momento com seu primeiro amor, disposto a encarar, anos depois, o verdadeiro motivo do término. Este filme é uma produção do É NÓIS NA FITA.",
    stillImagesSrc: [layoutStill21, layoutStill22],
  },

  {
    id: "papel",
    videoUrl: "https://youtu.be/KVL07OEthvk?si=2z_HmtjKvU3catOQ",
    title: "Papel (2026) - Tatah Rovani & BRUFAN",
    genre: "Videoclipe",
    role: "Roteiro, 3º Assistente de Direção, Continuísta",
    synopsis: `Artistas: Tatah Rovani – Intérprete e Compositora (@tatahdasrima).\nBrufan – Produtor Musical, Intérprete e Compositor (@brufan_)\n\nUma produção de Monomito Filmes.`,
    stillImagesSrc: [
      layoutStill23,
      layoutStill24,
      layoutStill25,
      layoutStill26,
      layoutStill27,
    ],
  },
  {
    id: "norte-da-saudade",
    videoUrl: "https://youtu.be/-6g1ciwA8-o?si=rJKNFY0iS8M72lqv",
    title: "No Norte da Saudade (2024)",
    genre: "Curta-Metragem Documental",
    role: "Produtor, Assistente de Direção",
    synopsis:
      "Kalú Kariú, homem trans, nortista, repleto de arte e poesia, nos convida a embarcar em uma odisseia particular atravessada por saudades e memórias que transcendem o espaço-tempo. Após 8 anos longe de casa ele relata como transforma a saudade em manancial de criação.",
    stillImagesSrc: [layoutStill28, layoutStill29],
  },
  {
    id: "noite-na-augusta",
    videoUrl: "https://youtu.be/qpKtiClxuco?si=ZXCkoSB_aASFRmzo",
    title: "Uma Noite na Augusta (2023)",
    genre: "Videoclipe",
    role: "Diretor, Roteirista",
    synopsis:
      "Explore a Rua Augusta e mergulhe na diversidade, diversão, magia e mistério que se desenrola ao pôr do sol. Testemunhe uma vida noturna repleta de histórias sob as luzes cintilantes desta rua icônica, capturando o contraste entre a inocência do dia e a glamourosa vida adulta da noite.",
    stillImagesSrc: [layoutStill30, layoutStill31, layoutStill32],
  },
  {
    id: "eles",
    videoUrl: "https://vimeo.com/878094859?fl=pl&fe=sh",
    title: "Eles (2023)",
    genre: "Curta-Metragem de Ficção",
    role: "Roteirista, Assistente de Produção",
    synopsis:
      "Dois jovens solitários, Raul e Saul, começam a trabalhar na mesma empresa na cidade de São Paulo. Inicialmente desajustados, ambos descobrem que compartilham muito mais do que apenas nomes parecidos. O que era apenas uma amizade por conveniência do trabalho se torna uma relação que atrai olhares e sussurros de quem os cercam.",
    stillImagesSrc: [layoutStill33],
  },
]
