import React from 'react';
import ReactDOM from 'react-dom/client';
import Historia1 from './pages/Historia1';
import Historia10 from './pages/Historia10';
import Historia11 from './pages/Historia11';
import Historia5 from './pages/Historia5';
import Historia9 from './pages/Historia9';
import Historia3 from './pages/Historia3';
import Historia2 from './pages/Historia2';
import Historia4 from './pages/Historia4';
import Historia7 from './pages/Historia7';
import Historia8 from './pages/Historia8';
import Historia12 from './pages/Historia12';
import reportWebVitals from './reportWebVitals';
import Historia17 from './pages/Historia17';
import Historia13 from './pages/Historia13';
import Historia14 from './pages/Historia14';
import Historia16 from './pages/Historia16';
import Historia18 from './pages/Historia18';
import Historia19 from './pages/Historia19';
import Historia15 from './pages/Historia15';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Historia1/> } />
        <Route path='/login' element={ <Historia2/> } />
        <Route path='/home' element={ <Historia3/> } />
        <Route path='/account' element={ <Historia4/> } />
        <Route path='/item' element={ <Historia7/> } />
        <Route path='/cart' element={ <Historia8/> } />
        <Route path='/cart' element={ <Historia9/> } />
        <Route path='/prebuiltselect' element={ <Historia10/> } />
        <Route path='/build1' element={ <Historia11/> } />
        <Route path='/custombuild' element={ <Historia12/> } />
        <Route path='/checkout' element={ <Historia13/> } />
        <Route path='/build2' element={ <Historia14/> } />
        <Route path='/ticket' element={ <Historia15/> } />
        <Route path='/ratingusers' element={ <Historia16/> } />
        <Route path='/ratinginfluencers' element={ <Historia17/> } />
        <Route path='/rankingperipherals' element={ <Historia18/> } />
        <Route path='/rankingpcs' element={ <Historia19/> } />
      </Routes>
    </BrowserRouter>
    <Historia1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
