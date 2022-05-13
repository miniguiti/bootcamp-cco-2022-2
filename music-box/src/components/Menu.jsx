import avatar from '../html-css-template/imagens/avatar.png'
import logo from '../html-css-template/imagens/logo-verde.png'

function Menu() {
  return (
    <nav>
      <div class="container">
        <img src={logo} alt="Logo" class="logo" />
        <img src={avatar} alt="Avatar" class="avatar" />
      </div>
    </nav>
  );
}

export default Menu;
