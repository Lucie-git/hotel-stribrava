import { useState } from 'react';
import { Room } from '../Room/Room';
import './style.css';

export const Rooms = ({ allRooms, onRoomSelect }) => {
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
                  id={room.id}
                  name={room.name}
                  price={room.price}
                  img={room.img}
                  description={room.description}
                  onRoomSelect={onRoomSelect}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
