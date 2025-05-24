import { useState } from 'react';
import './style.css';

export const Form = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [meal, setMeal] = useState('');
  const [pet, setPet] = useState(false);
  const [childBed, setChildBed] = useState(false);
  const [wheelchair, setWheelchair] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  {
    console.log(from, to, amount, meal, pet, childBed, wheelchair, email, phone);
  }

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
            onChange={(e) => {
              setMeal(e.target.value);
            }}
          >
            <option>Žádné</option>
            <option>Snídaně</option>
            <option>Polopenze</option>
            <option>Plná penze</option>
          </select>

          <label htmlFor="check1" className="field-label">
            Domácí mazlíček:
          </label>
          <input
            id="check1"
            className="field-input"
            type="checkbox"
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
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <h3>Celková cena za pobyt: 0 Kč</h3>
        <button className="wide">Odeslat poptávku</button>
      </form>
    </>
  );
};
