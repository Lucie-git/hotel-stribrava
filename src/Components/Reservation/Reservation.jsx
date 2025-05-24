import './style.css';
import { Form } from '../Form/Form';

export const Reservation = ({ selectedRoom }) => {
  if (selectedRoom)
    return (
      <>
        <section className="light">
          <div className="container">
            <h2>
              {selectedRoom.name}, {selectedRoom.price} Kč na osobu za noc
            </h2>
            <div className="columns-2">
              <div>
                <img src={selectedRoom.img} alt="Zvolený pokoj" />
                <div>{selectedRoom.description}</div>
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
