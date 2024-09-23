import Cabecalho from "../components/cabecalho";
import "./index.scss";

import { useState } from "react";

function Exercicio9() {
  const [gramas, setGramas] = useState(0);
  const [r, setR] = useState(0);

  function valorG() {
    let s3 = 3.5 / 100;

    let s2 = 3.0 / 100;

    let resp = 0;

    if (gramas >= 1000) {
      resp = gramas * s2;
    } else if (gramas < 1000 && gramas > 0) {
      resp = gramas * s3;
    } else {
      resp = "Peso inválido!";
    }

    setR(resp.toFixed(1));
  }

  function tA(e) {
    if (e.key == "Enter") {
      valorG();
    }
  }

  return (
    <div className="pagina-ex09">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex09">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 09 - Sorveteria</h2>
        </div>

        <br />
        <hr width="94%" color="#808080" />

        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implementar um programa em javascript que calcule o total a se pagar
            em uma compra na sorveteria, a partir do total de gramas comprado. O
            preço de 100g é R$ 3,50 mas se o total de gramas for a partir de
            1kg, o preço das 100g diminui 50 centavos.
          </p>
        </div>

        <div className="card">
          <h3>Total de gramas</h3>

          <input
            placeholder="0"
            value={gramas}
            onKeyUp={tA}
            onChange={(e) => setGramas(e.target.value)}
            />

          <button onClick={valorG}>Executar</button>
        </div>

        <h4>O total a pagar é R${r}</h4>
            </div>
      </main>
    </div>
  );
}

export default Exercicio9;
