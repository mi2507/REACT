// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


//Aqui temos uma array com dois objetos dentro 
let Tempo = [
    {
        id: 1,
        data: '31/05/2019',
        resumo: 'Ensolarado',
        imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
        temperatura: {
            max: 31,
            min: 20
        }
    },

    {
        id: 2,
        data: '01/06/2019',
        resumo: 'Nublado',
        imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
        temperatura: {
            max: 25,
            min: 18
        }
    }
]

/* Aqui temos um componente React */
function Previsao(props) {
    return (
        <div className="previsao">
            <h1 className="previsao__data ">{props.data}</h1>
            <h2 className="previsao__resumo">{props.resumo}</h2>
            <div>
                <img className="previsao__img" src={props.imagem} alt={props.descricao} />
            </div>
            <div className="previsao-temperatura">
                <p className="previsao-temperatura__linha">Máxima: {props.temperaturaMax}ºC</p>
                <p className="previsao-temperatura__linha">Mínima: {props.temperaturaMin}ºC</p>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="previsao-container">
            <Previsao
                data='31/05/2019'
                resumo='Ensolarado'
                imagem='https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'
                descricao="Tempo ensolarado"
                temperaturaMax={card1.max}
                temperaturaMin={card1.min}
            />

            <Previsao
                data='01/06/2019'
                resumo='Nublado'
                imagem='https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png'
                descricao="Tempo nublado"
                temperaturaMax={card2.max}
                temperaturaMin={card2.min}
            />
        </div>
    )
}

// /*Esse metodo rendeniza os elemento dentro da pagina, tratando como parametros OQUE dever ser posto e AONDE. */
ReactDOM.render(<App/>, document.getElementById('root'));