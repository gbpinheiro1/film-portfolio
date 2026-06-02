import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="flex h-dvh flex-col justify-center items-center text-3xl gap-5">
      <h1>Página não encontrada! ❌</h1>
      <Link to={"/"}>
        <button className="cursor-pointer border-2 p-3 rounded-full text-xl hover:bg-stone-950">
          Voltar para a página inicial
        </button>
      </Link>
    </div>
  )
}

export default NotFoundPage
