import './index.scss';

export default function Cabecalho(){
    return(
        <header className='cabecalho'>
              <div className="esq">
          <img className="logo" src="/assets/images/logo_freiS.png" alt="" />

          <h2 className="R">React FreiS</h2>
        </div>

        <div className="dir">
          <a href="/">Inicio</a>

          <a href="/sobre">Sobre</a>
        </div>
        </header>
    )
}