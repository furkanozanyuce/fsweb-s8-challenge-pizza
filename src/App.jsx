import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import MainForm from './MainForm';
import MainPage from './MainPage';



function App() {

  return (
      <>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/orderpage">
            <MainForm />
          </Route>
          <Route path="successpage">

          </Route>
        </Switch>
      </>
  )
}

export default App
