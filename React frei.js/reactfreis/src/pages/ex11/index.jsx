import Cabecalho from "../components/cabecalho";
import "./index.scss";

import { useState } from "react";

function Exercicio11() {
  const [numero, setNumero] = useState(0);
  const [resultados, setResultados] = useState([]);

  function tabuada() {
    let tb = [];

    for (let i = 0; i <= 10; i++) {
      let result = numero * i;

      tb[i] = `${numero} x ${i} = ${result}`;
    }

    setResultados(tb);
  }

  return (
    <div className="pagina-ex11">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex11">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 11 - Tabuada</h2>
        </div>

        <br />
        <hr width="94%" color="#00000" />

        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implemente um programa em Javascript que escreva no terminal a
            tabuada de um número informado pelo ususário. A mensagem deve estar
            no formato: "A x B = X".
          </p>
        </div>

        <div className="card">
          <h3>Tabuada do:</h3>

          <input
            placeholder="0"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            />

          <button onClick={tabuada}>Executar</button>
        </div>

        <h4>
          {resultados.map((r) => (
            <h3> {r} </h3>
          ))}
        </h4>
          </div>
      </main>
    </div>
  );
}

export default Exercicio11;
