import "./index.scss";
import Cabecalho from "../components/cabecalho";

function Sobre() {
  return (
    <div className="pagina-sobre">
      <header>
      <Cabecalho/>
      </header>

      <main>
        <h2>Sobre</h2>

        <div className="geral">

        <p>
          Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é
          ajudar você a aprimorar suas habilidades em Node.js e lógica de
          programação de forma prática e envolvente. Acreditamos que a prática
          constante é essencial para o aprendizado e o aperfeiçoamento em
          tecnologia. Nossa missão é fornecer um ambiente onde você possa
          praticar e testar seus conhecimentos em Node.js e lógica de
          programação, permitindo que você avance no seu próprio ritmo e de
          acordo com suas necessidades.
          <br />
          <br />
          Seja qual for seu nível de experiência, nossa plataforma é o lugar
          ideal para você crescer e desenvolver suas habilidades. Estamos
          ansiosos para ver seu progresso e sucesso!
        </p>

        <img className="fotinha" src="/assets/images/logo_freiS.png" alt="" />
        </div>
      </main>

      <p className="esp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique
        reprehenderit odit quibusdam explicabo doloribus dignissimos nihil
        aperiam, quo repellat culpa molestias ducimus obcaecati consequatur
        itaque! Repellendus, fugit. Esse, eveniet.lorem. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Aut, quod quisquam ab voluptas quam
        repudiandae in iste itaque est facere consequuntur repellendus quas
        tenetur cupiditate quia odit eos laborum id.. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Odit nam adipisci velit minus culpa
        consectetur, nobis nesciunt eveniet nulla sint sequi esse alias repellat
        ducimus. Eaque quisquam rerum incidunt veritatis.
      </p>
    </div>
  );
}

export default Sobre;
