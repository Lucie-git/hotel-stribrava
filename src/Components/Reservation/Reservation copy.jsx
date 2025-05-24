import './style.css';
import { Form } from '../Form/Form';

export const Reservation = ({ selectedRoom }) => {
  return (
    <>
      <section className="light">
        <div className="container">
          <h2>
            {selectedRoom && selectedRoom.name}, {selectedRoom && selectedRoom.price} Kč na osobu za
            noc
          </h2>
          <div className="columns-2">
            <div>
              <img src={selectedRoom && selectedRoom.img} alt="Zvolený pokoj" />
              <div>{selectedRoom && selectedRoom.description}</div>
            </div>
            <div className="column">
              <Form selectedRoom={selectedRoom} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
