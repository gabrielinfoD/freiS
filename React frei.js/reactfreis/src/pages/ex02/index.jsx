import Cabecalho from "../components/cabecalho";
import "./index.scss";

import { useState } from "react";

function Exercicio2() {
  const [Vgramas, setVgramas] = useState(0);
  const [resultado, setResultado] = useState(0);

  function KgEmGramas() {
    let kg = Number(Vgramas) * Number(1000) ;

    setResultado(Number(kg));

    return setResultado;
  }

  return (
    <div className="pagina-ex02">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex02">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 02 - Converter Kg/gramas</h2>
        </div>

        <br />
        <hr width="97%" color="#04F404" />

        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implementar um programa em Javascript para converter kilos em
            gramas.
          </p>
        </div>

        <div className="card">
          <h3>Valor em kg</h3>

          <input
            type="text"
            value={Vgramas}
            onChange={(e) => setVgramas(e.target.value)}
            />

          <button onClick={KgEmGramas}>Executar</button>
        </div>

        <h4>Resultado: O total é {resultado} gramas</h4>
            </div>
      </main>
    </div>
  );
}

export default Exercicio2;
