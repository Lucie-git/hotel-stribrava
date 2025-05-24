import './style.css';
import { Room } from '../Room/Room';

export const Rooms = () => {
  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Heading</h2>
          <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
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
