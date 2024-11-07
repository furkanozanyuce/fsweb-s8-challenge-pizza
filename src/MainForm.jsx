import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
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
import Header from './components/Header';
import Size from './components/Size';


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
  malzemeler: [],
  quantity: 1,
  extraCost: 0,
  totalPrice: 85.50,
  note: "",
}

const errorMessages = {
    note: 'Note must be at least 5 characters long',
  };

function MainForm() {

  const [formData, setFormData] = useState(initialData);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({note: false});

  const history = useHistory();

  useEffect(() => {
    if (formData.note.length >= 5 && formData.malzemeler.length  >= 4 && formData.malzemeler.length <= 10) {
        setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData])

  function handleChange(event) {
    const {type, name, value, checked} = event.target

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

    const selectedCount = formData.malzemeler.length + (checked ? 1 : -1);
        
      
        setErrors((prevErrors) => ({
            ...prevErrors,
            warining: selectedCount < 4 || selectedCount > 10,
        }));

    if (name === 'note') {
        setErrors({ ...errors, note: value.length < 5 });
      }
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      console.log("hatalı form");
      return;
    }
    
    axios.post("https://reqres.in/api/pizza", formData)
          .then((response) => {
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
    history.push("/successpage")
  };

  return (
    <>
    <Header />
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Size onChange={handleChange} value={initalHamur.name}/>
        </FormGroup>
        <div className='extra-label'>
        <Label><h2>Ek Malzemeler</h2>
                <p className='p-long'>En az 4, en fazla 10 adet ekstra malzeme seçebilirsiniz! 5₺</p>
                </Label>
        </div>
        <FormGroup className='extra-css' check>
                <div className='size-boyut3'>
                    {extras.map((extra, ind) => (
                    <div key={ind} className="extra-checkbox">
                        <Label>
                            <Input
                                type="checkbox"
                                onChange={handleChange}
                                checked={formData.malzemeler.includes(extra.value)}
                                name="malzemeler"
                                value={extra.value}
                                invalid={errors.warining}
                            />
                            {extra.label}
                        </Label>
                    </div>
                    ))}
                </div>
         </FormGroup>
        <div className='note'>
        <FormGroup>
        <Label for="note"><h2>Sipariş Notu</h2></Label>
        <Input
          type="textarea"
          name="note"
          id="note"
          placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          onChange={handleChange}
          value={formData.note}
          invalid={errors.note}
        />
        {errors.note && <FormFeedback>{errorMessages.note}</FormFeedback>}
      </FormGroup>
      </div>
      <div className='bottom-side'>
      <FormGroup className="quantity-selector">
        <Button onClick={() => handleQuantityChange(-1)} className="decrement btnn">-</Button>
        <span className="quantity">{formData.quantity}</span>
        <Button onClick={() => handleQuantityChange(1)} className="increment btnn">+</Button>
      </FormGroup>
      <div className='bottom-most'>
      <FormGroup>
        <div className="order-summary">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-item">
            <span>Seçimler</span>
            <span>{(formData.totalPrice - (formData.quantity * 85.50)).toFixed(2)}₺</span>
          </div>
          <div className="summary-item total">
            <span>Toplam</span>
            <span>{formData.totalPrice.toFixed(2)}₺</span>
          </div>
        </div>
          <Button color='warning' disabled={!isValid} className="order-button btnn">
            SİPARİŞ VER
          </Button>
        </FormGroup>        
      </div>     
      </div>
         
    </Form>
    </>
  )
}

export default MainForm
