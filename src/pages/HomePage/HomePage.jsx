import { Header } from '../../Components/Header/Header';
import { Reservation } from '../../Components/Reservation/Reservation';
import { Rooms } from '../../Components/Rooms/Rooms';
import { Footer } from '../../Components/Footer/Footer';

import './style.css';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <main>
          <Header />
          <Rooms />
          <Reservation />
          <Footer />
        </main>
      </div>
    </>
  );
};
