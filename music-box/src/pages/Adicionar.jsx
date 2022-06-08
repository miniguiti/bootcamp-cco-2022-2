import { useState } from "react";
import Menu from "../components/Menu";
import imgLateral from '../html-css-template/imagens/half-circles-pink-blue.png'
import api from "../api";
import { useNavigate } from "react-router-dom";

function Adicionar(){

    const [nomeInput, setNomeInput] = useState("");
    const [artistaInput, setArtistaInput] = useState("");
    const [generoInput, setGeneroInput] = useState("");
    const [anoInput, setAnoInput] = useState("");
    const [urlInput, setUrlInput] = useState("");

    const navegacao = useNavigate();

    console.log("Olha o onChange: ", nomeInput)

    function cadastrarMusica(e){
        e.preventDefault();

       const musicaCadastrar = {
           nome: nomeInput,
           artista: artistaInput,
           genero: generoInput,
           ano: anoInput,
           capa: urlInput
       } 
       
       api.post("/", musicaCadastrar).then((resposta) => {
           navegacao("/musicas")
       }).catch((erro) => {
           alert("Deu ruim :(")
       })

    }

    return(
        <>
        <Menu/>
        <div class="container">
            <div class="add-music">

                <div class="formulario">

                    <h1>adicionar</h1>

                    <br/>

                    <form>
                        <label>Música: <br/><input type="text" value={nomeInput} onChange={(e) => setNomeInput(e.target.value)}/></label>
                        <br/>
                        <label>Artista: <br/><input type="text" value={artistaInput} onChange={(e) => setArtistaInput(e.target.value)}/></label>
                        <br/>
                        <label>Genêro: <br/><input type="text"  value={generoInput} onChange={(e) => setGeneroInput(e.target.value)}/></label>
                        <br/>
                        <label>Ano de Lançamento: <br/><input type="text" value={anoInput} onChange={(e) => setAnoInput(e.target.value)}/></label>
                        <br/>
                        <label> Imagem (url): <br/><input type="text" value={urlInput} onChange={(e) => setUrlInput(e.target.value)}/></label>
                        <br/>
                        <button class="btn" onClick={cadastrarMusica}>Enviar</button>

                    </form>
                </div>

                <div class="img-lateral">
                    <img src={imgLateral} alt="" />
                </div>

            </div>
        </div>
        </>
    );
}

export default Adicionar;