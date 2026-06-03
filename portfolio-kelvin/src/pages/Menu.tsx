export function Menu() {
  return (
    <div className="flex flex-col justify-start items-center gap-7 h-screen">
      <h1 className="text-white font-cinzel text-4xl py-10">Kelvin Andrade</h1>

      <div className="grid grid-cols-1 gap-7 font-josefin font-light text-4xl w-full place-items-center">
        <div className="min-h-10 place-items-center border rounded-md p-3 w-1/2">
          <p>Trabalhos Selecionados</p>
        </div>
        <div className="min-h-10 place-items-center border rounded-md p-3 w-1/2">
          <p>Outros Trabalhos</p>
        </div>
        <div className="min-h-10 place-items-center border rounded-md p-3 w-1/2">
          <p>Contato</p>
        </div>
        <div className="min-h-10 place-items-center border rounded-md p-3 w-1/2">
          <p>Sobre</p>
        </div>
      </div>
      <footer className="flex gap-0.5 justify-center">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </footer>
    </div>
  )
}
