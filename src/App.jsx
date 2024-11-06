import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import MainForm from './MainForm';



function App() {

  return (
      <>
        <Switch>
          <Route exact path="/">
            <MainForm />
          </Route>
          <Route path="/orderpage">

          </Route>
          <Route path="ordercompleted">

          </Route>
        </Switch>
      </>
  )
}

export default App
