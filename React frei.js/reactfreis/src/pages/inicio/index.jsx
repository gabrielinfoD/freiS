import "./index.scss";

function Inicio() {
  return (
    <div className="pagina-inicio">
      <header>
        <div className="esq">
          <img className="logo" src="/assets/images/logo_freiS.png" alt="" />

          <h2 className="R">React FreiS</h2>
        </div>

        <div className="dir">
          <a href="/">Inicio</a>

          <a href="/sobre">Sobre</a>
        </div>
      </header>

      <main>
        <h1>Escolha um treino...</h1>

        <div className="bloquinhos">
          <a className="exs" href="/ex01">
            <div className="card">
              <img className="cores" src="/assets/images/laranja.png" alt="" />

              <h3>Cupom de desconto</h3>

              <p>Exercício 01</p>
            </div>
          </a>

          <a className="exs" href="/ex02">
            <div className="card">
              <img className="cores" src="/assets/images/verde.png" alt="" />

              <h3>Converter Kg/gramas</h3>

              <p>Exercício 02</p>
            </div>
          </a>

          <a className="exs" href="/ex03">
            <div className="card">
              <img className="cores" src="/assets/images/azul.png" alt="" />

              <h3>Valor total por quantidade</h3>

              <p>Exercício 03</p>
            </div>
          </a>

          <a className="exs" href="/ex04">
            <div className="card">
              <img className="cores" src="/assets/images/vermelho.png" alt="" />

              <h3>Tempo de leitura</h3>

              <p>Exercício 04</p>
            </div>
          </a>

        
          <a className="exs" href="/ex05">
            <div className="card">
              <img
                className="cores"
                src="/assets/images/azul_normal.png"
                alt=""
                />

              <h3>Médias escolares</h3>

              <p>Exercício 05</p>
            </div>
          </a>

          <a className="exs" href="/ex06">
            <div className="card">
              <img className="cores" src="/assets/images/amarelo.png" alt="" />

              <h3>Salário líquido</h3>

              <p>Exercício 06</p>
            </div>
          </a>

          <a className="exs" href="/ex07">
            <div className="card">
              <img className="cores" src="/assets/images/roxo.png" alt="" />

              <h3>Cores primárias</h3>

              <p>Exercício 07</p>
            </div>
          </a>

          <a className="exs" href="/ex08">
            <div className="card">
              <img className="cores" src="/assets/images/marrom.png" alt="" />

              <h3>Temperatura</h3>

              <p>Exercício 08</p>
            </div>
          </a>
       

        
          <a className="exs" href="/ex09">
            <div className="card">
              <img className="cores" src="/assets/images/cinza.png" alt="" />

              <h3>Sorveteria</h3>

              <p>Exercício 09</p>
            </div>
          </a>

          <a className="exs" href="/ex10">
            <div className="card">
              <img className="cores" src="/assets/images/rosa.png" alt="" />

              <h3>Calcule o IMC</h3>

              <p>Exercício 10</p>
            </div>
          </a>

          <a className="exs" href="/ex11">
            <div className="card">
              <img className="cores" src="/assets/images/preto.png" alt="" />

              <h3>Tabuada</h3>

              <p>Exercício 11</p>
            </div>
          </a>

          <a className="exs" href="/ex12">
            <div className="card">
              <img
                className="cores"
                src="/assets/images/verde_claro.png"
                alt=""
                />

              <h3>Comparador de pessoas</h3>

              <p>Exercício 12</p>
            </div>
          </a>
        
                </div>
      </main>
    </div>
  );
}

export default Inicio;
