import './style.css';
import { Form } from '../Form/Form';
import { Room } from '../Room/Room';

export const Reservation = () => {
  return (
    <>
      <section className="light">
        <div className="container">
          <h2>Název pokoje, ... na osobu za noc</h2>
          <div className="columns-2">
            <Room />
            <div className="column">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
