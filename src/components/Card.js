import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { useEffect, useState, useContext } from 'react';

function Card (props) {

  const currentUser = useContext(CurrentUserContext);
  console.log(props);
  const isOwn = props.owner._id === currentUser._id;
  // console.log(isOwn);

  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `...`;


  function handleClick() {
    props.onCardClick(props.link, props.name);
  }

  function handleLikeClick() {
    props.onCardLike(props)
    // console.log('like click', props)

  }

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={props.link} alt={props.name} onClick={handleClick}/>
      </div>
      <div className="card__text-wrapper">
        <h2 className="card__text">{props.name}</h2>
        <div className="card__wrapper-for-likes">
          <button className="card__btn-like" type="button" aria-label="like" onClick={handleLikeClick}></button>
          <p className="card__counter-likes">{props.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;