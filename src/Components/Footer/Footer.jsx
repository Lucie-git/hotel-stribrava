import './style.css';
import mapa from '../../img/mapa.png';

export const Footer = () => {
  return (
    <>
      <section className="dark">
        <div className="container columns-2">
          <div className="columns">
            <h2>Kontakt</h2>
            <p>Hotel Stříbrava</p>
            <p>
              Ke kamenné lávce 12 <br />
              317 24, Libnice nad Stříbravou <br />
              <br />
              <a href="mailto:recepce@hotelstribrava.cz">recepce@hotelstribrava.cz</a>
            </p>
          </div>
          <img src={mapa} />
        </div>
      </section>
    </>
  );
};
