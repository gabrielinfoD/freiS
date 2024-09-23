import Cabecalho from "../components/cabecalho";
import "./index.scss";

import { useState } from "react";

function Exercicio7() {
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [primario, setPrimario] = useState("");

  function corPrimaria() {
    let comp = cor1 == "amarelo" || cor1 == "azul" || cor1 == "vermelho";

    let comp2 = cor2 == "amarelo" || cor2 == "azul" || cor2 == "vermelho";

    let v = "false";

    if ((comp = comp2)) {
      v = "true";
    }

    setPrimario(v);

    return setPrimario;
  }

  return (
    <div className="pagina-ex07">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex07">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 07 - Cores primárias</h2>
        </div>

        <br />
        <hr width="94%" color="#4B0081" />
        
        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implementar um programa em Javascript para verificar se duas cores
            são primárias.
          </p>
        </div>

        <div className="card">
          <h3>Cor 1</h3>

          <input
            placeholder="Digite a 1° cor"
            value={cor1}
            onChange={(e) => setCor1(e.target.value)}
            />

          <h3>Cor 2</h3>

          <input
            placeholder="Digite a 2° cor"
            value={cor2}
            onChange={(e) => setCor2(e.target.value)}
            />

          <button onClick={corPrimaria}>Executar</button>
        </div>

        <h4>As duas cores são primárias? {primario}</h4>
            </div>
      </main>
    </div>
  );
}

export default Exercicio7;
