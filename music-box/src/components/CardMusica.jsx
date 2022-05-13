function CardMusica(props){
    return(
        <div class="card-music">
        <div class="icons">
          <img src="../imagens/edit-icon.png" alt="" />
          <img src="../imagens/delete-icon.png" alt="" />
        </div>
        <div class="info-music">
          <p>
            <strong class="card-title">música: </strong>
            <input class="input-music-disabled" type="text" value={props.nomeMusica} />
          </p>
          <p>
            <strong class="card-title">artista: </strong>
            <input class="input-music-disabled" type="text" value={props.artista} />
          </p>
          <p>
            <strong class="card-title">categoria: </strong>
            <input class="input-music-disabled" type="text" value={props.categoria}/>
          </p>
          <p>
            <strong class="card-title">ano: </strong>
            <input class="input-music-disabled" type="text" value={props.anoMusica} />
          </p>
          <button class="btn-salvar-disabled">Salvar</button>
        </div>
      </div>
    );
}

export default CardMusica;