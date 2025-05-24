import { Header } from '../../Components/Header/Header';
import { Reservation } from '../../Components/Reservation/Reservation';
import { Rooms } from '../../Components/Rooms/Rooms';
import { Footer } from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';

import './style.css';

export const HomePage = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [roomId, setRoomId] = useState(null);

  const handleRoomSelect = (id) => {
    setRoomId(id);
  };

  const selectedRoom = roomId === null ? allRooms[0] : allRooms.find((room) => room.id === roomId);

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
      <div className="container">
        <main>
          <Header />
          <Rooms allRooms={allRooms} onRoomSelect={handleRoomSelect} />
          <Reservation selectedRoom={selectedRoom} />
          <Footer />
        </main>
      </div>
    </>
  );
};
