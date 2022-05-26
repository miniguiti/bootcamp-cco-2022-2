import { useEffect, useState } from "react";
import api from "../api";
import CardMusica from "../components/CardMusica";
import Menu from "../components/Menu";

function Musicas() {

  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    api.get("/").then((resposta) => {
      console.log(resposta.data)
      setMusicas(resposta.data)
    })
  },[])

  return (
    <>
    <Menu/>
      <div className="container">
        <div class="filter">
          <button class="btn">Adicionar</button>
        </div>
      </div>

      <div class="container">
        <div class="music-boxes">                 
          {
            musicas.map((itemMusica) => (
              <CardMusica nomeMusica={itemMusica.nome} />
            ))
          }      
        </div>
      </div>
    </>
  );
}

export default Musicas;
