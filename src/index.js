//traigo la librería de React
import React from 'react';

//traigo la librería de ReactDOM
import ReactDOM from 'react-dom/client';

import App from './App';

import './css/estilos.css';


//muestro la app de React en el DOM
//crea un punto inicial (root) en donde la App se va a empezar a montar (dibujar)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
