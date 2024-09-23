import Cabecalho from "../components/cabecalho";
import "./index.scss";

import { useState } from "react";

function Exercicio12() {

  const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [listaPessoas, setListaPessoas] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const [estatisticas, setEstatisticas] = useState({
        maisVelho: "",
        mulherMaisJovem: "",
        mediaIdade: 0,
        homensMaisDe30: 0,
        mulheresMenosDe18: 0
        
    });

    function addPessoa() {
        if (nome !== '' && idade !== '' && sexo !== '') {
            const novaPessoa = { nome, idade: Number(idade), sexo };

            let novaListaPessoas;
            if (editIndex === -1) {
                novaListaPessoas = [...listaPessoas, novaPessoa];
            } else {
                novaListaPessoas = listaPessoas.map((pessoa, item) => {
                    if (item === editIndex) {
                        return novaPessoa;
                    } else {
                        return pessoa;
                    }
                });

                setEditIndex(-1);
            }

            setListaPessoas(novaListaPessoas);


            let maior = -Infinity;
            let menor = Infinity;
            let nm = "";
            let nmn = "";
            let outro = 0;
            let outro1 = 0;
            let soma = 0;

            for (let i = 0; i < novaListaPessoas.length; i++) {
                const pessoa = novaListaPessoas[i];
                soma += pessoa.idade;

                if (pessoa.idade > maior) {
                    maior = pessoa.idade;
                    nm = pessoa.nome;
                }

                if (pessoa.sexo === 'Feminino' && pessoa.idade < menor) {
                    menor = pessoa.idade;
                    nmn = pessoa.nome;
                }

                if (pessoa.sexo === 'Masculino' && pessoa.idade > 30) {
                    outro++;
                }

                if (pessoa.sexo === 'Feminino' && pessoa.idade < 18) {
                    outro1++;
                }
            }

            let media = soma / novaListaPessoas.length;

            setEstatisticas({
                maisVelho: nm,
                mulherMaisJovem: nmn,
                mediaIdade: media.toFixed(2),
                homensMaisDe30: outro,
                mulheresMenosDe18: outro1
            });

            setNome('');
            setIdade('');
            setSexo('');
        }
    }

    function remove(pos) {
        const updatedList = [...listaPessoas];
        updatedList.splice(pos, 1);
        setListaPessoas(updatedList);
    }

    function alterarDados(pos) {
        const pessoa = listaPessoas[pos];
        setNome(pessoa.nome);
        setIdade(pessoa.idade);
        setSexo(pessoa.sexo);
        setEditIndex(pos);
    }

  return (
    <div className="pagina-ex12">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <div className="titulo-ex12">
          <a href="/">
            <img
              className="seta"
              src="/assets/images/setinha_freiS.png"
              alt=""
            />
          </a>

          <h2>Exercício 12 - Comparador de pessoas</h2>
        </div>

        <br />
        <hr width="94%" color="#4EA93B" />

        <div className="geral">

        <div className="bloco" width="94px">
          <p>
            Implemente um programa em Javascript que leia o nome, a idade, e o
            sexo de várias pessoas.
          </p>
        </div>

        <div className="card">
          <h3>Nome</h3>

          <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />

          <h3>Idade</h3>

          <input placeholder="Idade" value={idade} onChange={e => setIdade(e.target.value)}/>

          <h3>Sexo</h3>

          <div className="group">
            <div className="r">
              <input type="radio" name="g" onChange={e => setSexo(e.target.value)} checked={sexo === 'Masculino'} /> Masculino
            </div>

            <div>
              <input type="radio" name="g" onChange={e => setSexo(e.target.value)} checked={sexo === 'Feminino'} /> Feminino
            </div>
          </div>

          <button >Executar</button>
        </div>

        <div className="w">
        <p>Pessoa mais velha: {estatisticas.maisVelho}</p>
          <p>Mulher mais jovem: {estatisticas.mulherMaisJovem}</p>
          <p>Média de idade: {estatisticas.mediaIdade}</p>
          <p>Homens com mais de 30: {estatisticas.homensMaisDe30}</p>
          <p>Mulheres com menos de 18: {estatisticas.mulheresMenosDe18}</p>
        </div>
        </div>
      </main>
    </div>
  );
}

export default Exercicio12;
