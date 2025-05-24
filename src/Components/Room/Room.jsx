import './style.css';

export const Room = ({ id, name, price, img, description, onRoomSelect }) => {
  return (
    <>
      <div className="card" onClick={() => onRoomSelect(id)}>
        <img className="card__image" src={img} />
        <div className="card__title">{name}</div>
        <div className="card__body">{price} Kč na osobu</div>
      </div>
    </>
  );
};
