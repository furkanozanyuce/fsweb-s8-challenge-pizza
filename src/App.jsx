import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainForm from './MainForm';
import MainPage from './MainPage';
import SuccessPage from './SuccessPage';


//malzemeler
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

//hamur
const initalHamur = [
  {name: "İnce"},
  {name: "Normal"},
  {name: "Kalın"}
]


function App() {

  const [orderData, setOrderData] = useState(null);

  return (
      <>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/orderpage">
            <MainForm setOrderData={setOrderData} extras={extras} initalHamur={initalHamur} />
          </Route>
          <Route path="/successpage">
            <SuccessPage orderData={orderData} extras={extras} initalHamur={initalHamur} />
          </Route>
        </Switch>
      </>
  )
}

export default App
