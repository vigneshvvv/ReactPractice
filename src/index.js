import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './components/car';
import Garage from './components/Garage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './components/Sample';
import MainContent from './components/MainContent';
import Introduction from './components/Introduction';
import UseEffect from './components/UseEffect';
import StatePractice from './components/StatePractice';
import About from './mernstack/About';
import TableComponent from './TableComponent/TableComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <Garage/> */}
    {/* <Sample/> */}
    {/* <MainContent/> */}
    {/* <App/> */}
    {/* <About/> */}
    <TableComponent/>
    {/* <UseEffect/> */}
    {/* <StatePractice/> */}
    {/* <Introduction/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
