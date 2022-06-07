function Main(){
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>
          <div className="form">
            <h2>Preencha os dados para contato!</h2>
            <form>
              <div className="items-form">
                <input Placeholder="Seu nome..." type="text" />
                <input Placeholder="Seu e-mail..." type="text" />
                <input Placeholder="Sua Profissao..." type="text" />
                <input Placeholder="Sua Cidade..." type="text" />
                <input type="submit" />
              </div>

            </form>
          </div>

        </div>


      </div>
    )

}

export default Main;