import { BrowserRouter, Route, Routes } from "react-router-dom";
import Musicas from './pages/Musicas'
import Adicionar from './pages/Adicionar'

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/musicas" element={<Musicas/>}/>
                <Route path="/adicionar" element={<Adicionar/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;