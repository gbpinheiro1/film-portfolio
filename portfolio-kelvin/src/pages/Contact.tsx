export function Contact() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <form className=" bg-taupe-100 text-black ">
        <h1>Contato</h1>
        <div>
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            className="field"
            placeholder="Digite seu Nome"
            required
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="field"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div>
          <label htmlFor="">Mensagem</label>
          <textarea
            name=""
            id=""
            placeholder="Digite sua mensagem"
            required
            className="field-msg"
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </div>
      </form>
    </div>
  )
}
