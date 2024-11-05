import Header from './Header';
import Form2 from './Form2';
import Size from './Size';
import Extra from './Extra';
import { useState } from 'react';

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
  "isim": "string",
  "boyut": "string",
  "malzemeler": [],
  "özel": "string"
}

function Form() {

  const [formData, setFormData] = useState(initialData);

  function handleChange(event) {
    const {type, name, value, checked} = event.target
    console.log(type, name, value, checked)
    
    if (type === "checkbox" && name === "malzemeler") {
      setFormData(prevData => ({
        ...prevData,
        malzemeler: checked
          ? [...prevData.malzemeler, value]
          : prevData.malzemeler.filter(item => item !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }
  
    return (
      <>
        <Header />
        <Form2 />
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
      </>
    )
  }
  
  export default Form