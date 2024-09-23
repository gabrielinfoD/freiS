import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Exercicio1 from './pages/ex01';
import Exercicio2 from './pages/ex02';
import Exercicio3 from './pages/ex03';
import Exercicio4 from './pages/ex04';
import Exercicio5 from './pages/ex05';
import Exercicio6 from './pages/ex06';
import Exercicio7 from './pages/ex07';
import Exercicio8 from './pages/ex08';
import Exercicio9 from './pages/ex09';
import Exercicio10 from './pages/ex10';
import Exercicio11 from './pages/ex11';
import Exercicio12 from './pages/ex12';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/ex01' element={<Exercicio1 />} />
              <Route path='/ex02' element={<Exercicio2 />} />
              <Route path='/ex03' element={<Exercicio3 />} />
              <Route path='/ex04' element={<Exercicio4 />} />
              <Route path='/ex05' element={<Exercicio5 />} />
              <Route path='/ex06' element={<Exercicio6 />} />
              <Route path='/ex07' element={<Exercicio7 />} />
              <Route path='/ex08' element={<Exercicio8 />} />
              <Route path='/ex09' element={<Exercicio9 />} />
              <Route path='/ex10' element={<Exercicio10 />} />
              <Route path='/ex11' element={<Exercicio11 />} />
              <Route path='/ex12' element={<Exercicio12 />} />
         </Routes>
      </BrowserRouter>

    )

}