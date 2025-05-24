import './style.css';
import { Form } from '../Form/Form';

export const Reservation = () => {
  return (
    <>
      <section className="light">
        <div className="container">
          <h2>Název pokoje, ... na osobu za noc</h2>
          <div className="columns-2">
            <div className="column">
              <img src="img/image1.svg" />
              <p>Popis pokoje</p>
            </div>
            <div className="column">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
