import logo from '../images/logo.svg'

function Register() {
  return(
    <>
      <header className="header">
        <div className="header__wrapper">
          <img className="header__logo-image" src={logo} alt="Mesto Логотип"></img>
          <p1 className="header__sign-up">Войти</p1>
        </div>
      </header>
      <form className="log-in">
        <h2 className="log-in__title">Регистрация</h2>
        <input className="log-in__input" type="email" minLength="5" maxLength="40" placeholder="Email" required/>
        <input className="log-in__input" type="password" minLength="6" maxLength="40" placeholder="Пароль" required/>
      <button className="log-in__submit" type="submit">Зарегистрироваться</button>
      </form>
      <p className="log-in__subtitle">Уже зарегистрированы? Войти</p>
    </>
  )
}

export default Register;