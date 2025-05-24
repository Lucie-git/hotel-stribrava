import './style.css';

export const Room = () => {
  return (
    <>
      <div className="card">
        <img className="card__image" src="img/image1.svg" />
        <div className="card__title">Název pokoje</div>
        <div className="card__body">... Kč na osobu</div>
      </div>
    </>
  );
};
