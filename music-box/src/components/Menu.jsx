import avatar from '../html-css-template/imagens/avatar.png'
import logo from '../html-css-template/imagens/logo-verde.png'

function Menu() {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </nav>
  );
}

export default Menu;
