import { useState } from 'react';
import dayjs from 'dayjs';
import './style.css';

export const Form = ({ selectedRoom }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('1');
  const [meal, setMeal] = useState('nothing');
  const [pet, setPet] = useState(false);
  const [childBed, setChildBed] = useState(false);
  const [wheelchair, setWheelchair] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const mealPrices = {
    nothing: 0,
    breakfast: 250,
    halfBoard: 400,
    fullBoard: 700,
  };

  const stayDuration = dayjs(to).diff(dayjs(from), 'day') || 1;
  let tentativePrice =
    ((selectedRoom && stayDuration * selectedRoom.price) + mealPrices[meal]) * amount;
  let petPrice = pet && selectedRoom.price / 4;
  let childBedPrice = childBed && selectedRoom.price / 2;
  const finalPrice = tentativePrice + petPrice + childBedPrice;

  return (
    <>
      <form>
        <div className="form-fields">
          <label htmlFor="field1" className="field-label">
            Od:
          </label>
          <input
            id="field1"
            className="field-input"
            type="date"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
          <label htmlFor="field2" className="field-label">
            Do:
          </label>
          <input
            id="field2"
            className="field-input"
            type="date"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />
          <label htmlFor="field1" className="field-label">
            Počet osob:
          </label>
          <input
            id="field3"
            className="field-input"
            type="number"
            min="0"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <label htmlFor="select" className="field-label">
            Stravování:
          </label>
          <select
            id="select"
            className="field-input"
            value={meal}
            onChange={(e) => {
              setMeal(e.target.value);
            }}
          >
            <option value="nothing">Žádné</option>
            <option value="breakfast">Snídaně</option>
            <option value="halfBoard"> Polopenze</option>
            <option value="fullBoard">Plná penze</option>
          </select>

          <label htmlFor="check1" className="field-label">
            Domácí mazlíček:
          </label>
          <input
            id="check1"
            className="field-input"
            type="checkbox"
            value={pet}
            onChange={(e) => {
              setPet(e.target.checked);
            }}
          />
          <label htmlFor="check1" className="field-label">
            Přistýlka pro dítě:
          </label>
          <input
            id="check2"
            className="field-input"
            type="checkbox"
            value={childBed}
            onChange={(e) => {
              setChildBed(e.target.checked);
            }}
          />
          <label htmlFor="check1" className="field-label">
            Bezbariérový přístup:
          </label>
          <input
            id="check3"
            className="field-input"
            type="checkbox"
            value={wheelchair}
            onChange={(e) => {
              setWheelchair(e.target.checked);
            }}
          />
          <label htmlFor="field1" className="field-label">
            E-mail:
          </label>
          <input
            id="field4"
            className="field-input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="field1" className="field-label">
            Telefon:
          </label>
          <input
            id="field5"
            className="field-input"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <h3>Celková cena za pobyt: {finalPrice} Kč</h3>
        <button className="wide">Odeslat poptávku</button>
      </form>
    </>
  );
};
