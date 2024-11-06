import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Form from './components/Form';
import Size from './components/Size';
import Extra from './components/Extra';
import Note from './components/Note';
import MainForm from './MainForm';



function App() {

  return (
    <>
        <Header />
        <Form />
        <div>
          <Switch>
            <Route exact path="/">
              <MainForm />
            </Route>
            <Route path="/orderpage">

            </Route>
            <Route path="ordercompleted">

            </Route>
          </Switch>
        </div>
      </>
  )
}

export default App
