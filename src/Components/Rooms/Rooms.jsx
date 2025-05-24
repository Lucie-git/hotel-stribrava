import './style.css';
import { Room } from '../Room/Room';

export const Rooms = () => {
  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z naších pokojů je pro vás ten pravý.</p>
          <div className="cards-row">
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
          </div>
        </div>
      </section>
    </>
  );
};
