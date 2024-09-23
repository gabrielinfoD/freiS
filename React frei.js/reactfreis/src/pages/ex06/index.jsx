import "./index.scss";
import Cabecalho from "../components/cabecalho";

import { useState } from "react";

function Exercicio6() {
  const [salario, setSalario] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [total, setTotal] = useState(0);

  function salarioLiquido() {
    let sala = (Number(salario) * Number(bonus)) / 100;

    let bonu = Number(sala) + Number(salario);

    let desc = Number(bonu) - Number(desconto)

    setTotal(desc);

    return setTotal;
  }

  return (
    <div className="pagina-ex06">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex06">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 06 - Salário liquido</h2>
        </div>

        <br />
        <hr width="94%" color="yellow" />

        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implementar um programa em Javascript para calcular o salario
            liquido de um funcionário, a partir de seu salário base, do bônus
            mensal em porecentagem e total de descontos em reais.
          </p>
        </div>

        <div className="card">
          <div className="qtds">
            <div className="tt">
              <h3>Salário</h3>

              <input
                placeholder="0"
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
                />
            </div>

            <div className="tt">
              <h3>Bônus</h3>

              <input
                placeholder="0"
                value={bonus}
                onChange={(e) => setBonus(e.target.value)}
                />
            </div>

            <div className="tt">
              <h3>Desconto</h3>

              <input
                placeholder="0"
                value={desconto}
                onChange={(e) => setDesconto(e.target.value)}
                />
            </div>
          </div>

          <button onClick={salarioLiquido}>Executar</button>
        </div>

        <h4>O salário liquído é R${total.toFixed(2)}</h4>
                </div>
      </main>
    </div>
  );
}

export default Exercicio6;
