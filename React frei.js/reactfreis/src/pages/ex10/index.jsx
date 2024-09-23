import Cabecalho from "../components/cabecalho";
import "./index.scss";

import { useState } from "react";

function Exercicio10() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [listaImc, setListaImc] = useState([]);
  const [imc, setImc] = useState("");
  const [edit, setEdit] = useState(-1);

  function addImc() {
    let i = peso / (altura * altura);

    let s = "";

    if (i >= 40) {
      s = `Peso: ${peso} | Altura: ${altura} | Situação: Obesidade Grau |||`;
    } else if (i >= 35 && i <= 39.9) {
      s = `Peso: ${peso} | Altura: ${altura} | Situação: Obesidade Grau ||`;
    } else if (i >= 30 && i <= 34.9) {
      s = `Peso: ${peso} | Altura: ${altura} | Situação: Obesidade Grau |`;
    } else if (i >= 25 && i <= 29.9) {
      s = `Peso: ${peso} | Altura: ${altura} | Situação: Sobrepeso`;
    } else if (i >= 18.5 && i <= 24.9) {
      s = `Peso: ${peso} | Altura: ${altura} | Situação: Peso Normal`;
    } else if (i < 18.5) {
      s = `Peso: ${peso} | Altura: ${altura} | Situação: Abaixo do Peso`;
    }

    if (peso != 0 && altura != 0) {
      if (edit == -1) {
        setListaImc([...listaImc, s]);

        setImc(s);

        setAltura(0);
        setPeso(0);
      } else {
        listaImc[edit] = altura;
        listaImc[edit] = peso;

        setListaImc([...listaImc]);
        setAltura(0);
        setPeso(0);

        setEdit(-1);
      }
    }

    return setImc;

    //setListaImc[i] = `Peso: ${peso} | Altura: ${altura} | Situação: ${s}`

    //setSit(i)
  }

  function remove(pos) {
    listaImc.splice(pos, 1);

    setListaImc([...listaImc]);
  }

  function editing(pos) {
    setAltura(listaImc[pos]);
    setPeso(listaImc[pos]);

    setEdit(pos);
  }

  function tA(e) {
    if (e.key == "Enter") {
      addImc();
    }
  }

  return (
    <div className="pagina-ex10">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex10">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 10 - Calcule o IMC</h2>
        </div>

        <br />
        <hr width="94%" color="#E44F9C" />

        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implemente um programa em Javascript que a partir da altura e do
            peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a
            tabela ao lado. Ao final, apresente o IMC e a situação.
          </p>
        </div>

        <div className="lado">
          <div className="card">
            <div className="l">
              <div className="c">
                <h3>Altura</h3>
                <input
                  placeholder="0.0"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  />
              </div>

              <div className="c">
                <h3>Peso</h3>
                <input
                  placeholder="0.0"
                  onKeyUp={tA}
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  />
              </div>
            </div>

            <div className="l">
              <button onClick={addImc}>Executar</button>
            </div>
          </div>

          {/*<h4>Seu IMC é: {exib.toFixed(2)}</h4>*/}

          <ul>
            {listaImc.map((i) => (
              <li>
                <li className="linha-b">
                  {i}
                  <img
                    className="edit"
                    onClick={editing}
                    
                    alt=""
                    />
                </li>
                <li className="bot">
                  <button onClick={remove}>
                    <img src="/assets/images/image.png" alt="" />
                  </button>
                </li>
              </li>
            ))}
          </ul>
        </div>
            </div>
      </main>
    </div>
  );
}

export default Exercicio10;
