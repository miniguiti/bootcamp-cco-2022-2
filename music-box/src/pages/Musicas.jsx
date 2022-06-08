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
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">                 
          {
            musicas.map((itemMusica) => (
              <CardMusica nomeMusica={itemMusica.nome}
                          artista={itemMusica.artista}
                          categoria={itemMusica.genero}
                          anoMusica={itemMusica.ano}
                          capa={itemMusica.capa}/>
            ))
          }      
        </div>
      </div>
    </>
  );
}

export default Musicas;
