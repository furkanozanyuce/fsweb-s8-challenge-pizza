import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
  } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Size from './components/Size';
import Extra from './components/Extra';
import Note from './components/Note';


const extras = [{
  value: "pepperoni",
  label: "Pepperoni"
}, {
  value: "sosis",
  label: "Sosis"
}, {
  value: "kanadaJambonu",
  label: "Kanada Jambonu"
}, {
  value: "tavukIzgara",
  label: "Tavuk Izgara"
}, {
  value: "sogan",
  label: "Soğan"
}, {
  value: "domates",
  label: "Domates"
}, {
  value: "misir",
  label: "Mısır"
}, {
  value: "sucuk",
  label: "Sucuk"
}, {
  value: "jalepeno",
  label: "Jalepeno"
}, {
  value: "sarimsak",
  label: "Sarımsak"
}, {
  value: "biber",
  label: "Biber"
}, {
  value: "zeytin",
  label: "Zeytin"
}, {
  value: "ananas",
  label: "Ananas"
}, {
  value: "kabak",
  label: "Kabak"
}, {
  value: "peynir",
  label: "Peynir"
}
];

const initalHamur = [
    {name: "İnce"},
    {name: "Normal"},
    {name: "Kalın"}
]

const initialData = {
  "malzemeler": [],
  "quantity": 1,
  "extraCost": 0,
  "totalPrice": 85.50,
  "note": ""
}



function MainForm() {

  const [formData, setFormData] = useState(initialData);

  function handleChange(event) {
    const {type, name, value, checked} = event.target
    console.log(type, name, value, checked)

    setFormData(prevData => {
      let newExtrasCost = prevData.extraCost;
      let newMalzemeler = [...prevData.malzemeler];

      if (type === "checkbox" && name === "malzemeler") {
        if (checked) {
          newMalzemeler.push(value);
          newExtrasCost += 5;
        } else {
          newMalzemeler = newMalzemeler.filter(item => item !== value);
          newExtrasCost -= 5;
        }
      }

      const updatedTotalPrice = (prevData.quantity * 85.50) + newExtrasCost;

      return {
        ...prevData,
        [name]: name === "malzemeler" ? newMalzemeler : value,
        extraCost: newExtrasCost,
        totalPrice: updatedTotalPrice
      };
    });
  }

  function handleQuantityChange(amount) {
    setFormData(prevData => {
      const newQuantity = Math.max(1, prevData.quantity + amount);
      const updatedTotalPrice = (newQuantity * 85.50) + prevData.extraCost;

      return {
        ...prevData,
        quantity: newQuantity,
        totalPrice: updatedTotalPrice
      };
    });
  }

  return (
    <>
        <Size onChange={handleChange} value={initalHamur.name}/>
        <div className='extra-css'>
          <h2>Ek Malzemeler</h2>
          <p className='p-long'>En fazla 10 mazleme seçebilirsiniz. 5TL</p>
          <div className='size-boyut3'>
            {extras.map((extra, ind) => (
            <Extra key={ind} onChange={handleChange} checked={formData.malzemeler.includes(extra.value)} name="malzemeler" value={extra.value} label={extra.label}  />
            ))}
          </div>
        
        </div>
        <Note quantity={formData.quantity} totalPrice={formData.totalPrice} onIncrement={() => handleQuantityChange(1)} onDecrement={() => handleQuantityChange(-1)} onChange={handleChange} value={formData.note} />
      </>
  )
}

export default MainForm
