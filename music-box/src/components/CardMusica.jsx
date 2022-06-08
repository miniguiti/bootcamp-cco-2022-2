import editIcon from '../html-css-template/imagens/edit-icon.png'
import deleteIcon from '../html-css-template/imagens/delete-icon.png'
function CardMusica(props){
    const imgCapa = {
      backgroundImage: `url(${props.capa})`
    }

    return(
        <div className="card-music" style={imgCapa}>
        <div className="icons">
          <img src={editIcon} alt="" />
          <img src={deleteIcon} alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input className="input-music-disabled" type="text" value={props.nomeMusica} />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input className="input-music-disabled" type="text" value={props.artista} />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input className="input-music-disabled" type="text" value={props.categoria}/>
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input className="input-music-disabled" type="text" value={props.anoMusica} />
          </p>
          <button className="btn-salvar-disabled">Salvar</button>
        </div>
      </div>
    );
}

export default CardMusica;