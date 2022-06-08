import Menu from "../components/Menu";

function Adicionar(){
    return(
        <>
        <Menu/>
        <div class="container">
            <div class="add-music">

                <div class="formulario">

                    <h1>adicionar</h1>

                    <br/>

                    <form>
                        <label>Música: <br/><input type="text" /></label>
                        <br/>
                        <label>Artista: <br/><input type="text" /></label>
                        <br/>
                        <label>Genêro: <br/><input type="text" /></label>
                        <br/>
                        <label>Ano de Lançamento: <br/><input type="text" /></label>
                        <br/>
                        <label> Imagem (url): <br/><input type="text" /></label>
                        <br/>
                        <button class="btn">Enviar</button>

                    </form>
                </div>

                <div class="img-lateral">
                    <img src="../imagens/half-circles-pink-blue.png" alt="" />
                </div>

            </div>
        </div>
        </>
    );
}

export default Adicionar;