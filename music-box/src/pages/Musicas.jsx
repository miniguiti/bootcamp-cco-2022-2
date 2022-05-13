import CardMusica from "../components/CardMusica";
import Menu from "../components/Menu";

function Musicas() {
  return (
    <>
    <Menu/>
      <div class="container">
        <div class="filter">
          <button class="btn">Adicionar</button>
        </div>
      </div>

      <div class="container">
        <div class="music-boxes">
         
         
         <CardMusica nomeMusica="Evidências" batata="Nome Artista 01" ano="2000" categoria="Rock 01"/>
         <CardMusica nomeMusica="Música 02"  batata="Nome Artista 02" ano="2000" categoria="Axé 02"/>
         <CardMusica nomeMusica="Musica 03"  batata="Nome Artista 03" ano="2000" categoria="Samba 03"/>
         <CardMusica nomeMusica="Música 02"  batata="Nome Artista 04" ano="2000" categoria="Pop 04"/>
         <CardMusica nomeMusica="Musica 03"  batata="Nome Artista 05" ano="2000" categoria="Funk 05"/>
         
        </div>
      </div>
    </>
  );
}

export default Musicas;
