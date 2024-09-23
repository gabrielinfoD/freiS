import Cabecalho from "../components/cabecalho";
import "./index.scss";

import { useState } from "react";

function Exercicio4() {
  const [nome, setNome] = useState("");
  const [paginas, setPaginas] = useState(0);
  const [segundosPg, setSegundosPg] = useState(0);
  const [resultado, setResultado] = useState(0);

  function horasLivro() {
    let t = segundosPg * 60;

    let h = (paginas * t) / 3600;

    let time = h / 60;

    setResultado(time);

    return setResultado;
  }

  function tA(e) {
    if (e.key == "Enter") {
      horasLivro();
    }
  }

  return (
    <div className="pagina-ex04">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex04">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 04 - Tempo de leitura</h2>
        </div>

        <br />
        <hr width="94%" color="#a20202" />
        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implementar um programa em Javascript que calcule o tempo que um
            livro será lido por uma pessoa a partir do nome do livro, do total
            de páginas e do tempo em segundos de leitura por página.
          </p>
        </div>

        <div className="card">
          <div className="qtds">
            <div className="tt">
              <h3>Nome do livro</h3>

              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className="tt">
              <h3>Total de páginas</h3>

              <input
                placeholder="0"
                value={paginas}
                onChange={(e) => setPaginas(e.target.value)}
                />
            </div>

            <div className="tt">
              <h3>Tempo em segundos</h3>

              <input
                placeholder="0"
                onKeyUp={tA}
                value={segundosPg}
                onChange={(e) => setSegundosPg(e.target.value)}
                />
            </div>
          </div>

          <button onClick={horasLivro}>Executar</button>
        </div>

        <h4>
          Você lerá {nome} em {resultado.toFixed(2)} horas
        </h4>
                </div>
      </main>
    </div>
  );
}

export default Exercicio4;
