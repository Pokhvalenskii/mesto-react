import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'

function App() {
  return (
    <div className='root'>
      <Header />
      <Main />
      <Footer />
      <template id="tempCard">
        <article className="card">
          <div className="card__image-wrapper">
            <img className="card__image" src="/" alt=" "/>
          </div>
          <div className="card__text-wrapper">
            <h2 className="card__text"></h2>
            <div className="card__wrapper-for-likes">
              <button className="card__btn-like" type="button" aria-label="like"></button>
              <p className="card__counter-likes">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
