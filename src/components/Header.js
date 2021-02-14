import logo from '../images/logo.svg'

function Header () {
  return (
    <>
      <header className="header">
        <img className="header__logo-image" src={logo} alt="Mesto Логотип"></img>
      </header>
    </>
  )
}

export default Header;