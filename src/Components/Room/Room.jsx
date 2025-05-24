import './style.css';

export const Room = ({ id, name, price, img, description }) => {
  return (
    <>
      <div className="card">
        <img className="card__image" src="img/image1.svg" />
        <div className="card__title">{name}</div>
        <div className="card__body">{price} Kč na osobu</div>
      </div>
    </>
  );
};
