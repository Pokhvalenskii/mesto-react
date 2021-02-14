function Card (props) {

  function handleClick() {
    console.log(props.card)
    console.log('Ниже функция')
    props.onCardClick(props.link, props.name);
  }

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={props.link} alt=" " onClick={handleClick}/>
      </div>
      <div className="card__text-wrapper">
        <h2 className="card__text">{props.name}</h2>
        <div className="card__wrapper-for-likes">
          <button className="card__btn-like" type="button" aria-label="like"></button>
          <p className="card__counter-likes">{props.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;