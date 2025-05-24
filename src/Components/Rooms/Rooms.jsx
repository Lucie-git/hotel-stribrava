import './style.css';
import { Room } from '../Room/Room';
import { useEffect, useState } from 'react';

export const Rooms = () => {
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const responseData = await response.json();
      const roomsData = responseData.data;
      setAllRooms(roomsData);
    };

    fetchRooms();
  }, []);

  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z naších pokojů je pro vás ten pravý.</p>
          <div className="cards-row">
            {allRooms.map((room) => {
              return (
                <Room
                  key={room.id}
                  name={room.name}
                  price={room.price}
                  img={room.img}
                  description={room.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
