import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/register';
import PrebuildSelect from './pages/prebuiltselect';
import Prebuilt from './pages/prebuilt';
import Home from './pages/home';
import Login from './pages/login';
import ProfileInfo from './pages/profileinfo';
import Historia7 from './pages/Historia7';
import Custombuild from './pages/custombuild';
import reportWebVitals from './reportWebVitals';
import Ratinginfluencers from './pages/ratinginfluencers';
import Checkout from './pages/checkout';
import Checkoutfinal from './pages/checkoutfinal';
import OrderHistory from './pages/orderhistory';
import Support from './pages/support';
import Historia16 from './pages/Historia16';
import Historia18 from './pages/Historia18';
import Rankingpcs from './pages/rankingpcs';
import HistoriaExtraFP from './pages/HIstoriaExtraFP';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profileInfo' element={<ProfileInfo />} />
        <Route path='/item' element={<Historia7 />} />
        <Route path='/prebuiltselect' element={<PrebuildSelect />} />
        <Route path='/prebuilt' element={<Prebuilt />} />
        <Route path='/custombuild' element={<Custombuild />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkoutfinal' element={<Checkoutfinal />} />
        <Route path='/orderHistory' element={<OrderHistory />} />
        <Route path='/ticket' element={<Support />} />
        <Route path='/ratingusers' element={<Historia16 />} />
        <Route path='/ratinginfluencers' element={<Ratinginfluencers />} />
        <Route path='/rankingperipherals' element={<Historia18 />} />
        <Route path='/rankingpcs' element={<Rankingpcs />} />
        <Route path='/passwordreset' element={<HistoriaExtraFP />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
