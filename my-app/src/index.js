import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

import * as serviceWorker from './serviceWorker';

// let contadorNum = 3;
// const nome = {
//     primeiroNome: "Michelle",
//     sobreNome: "Regina"
// }


// function nomeCompleto(nome) {
//     if (nome) {
//         return nome.primeiroNome + ' ' + nome.sobreNome;
//     } else {
//         return 'desconhecido';
//     }
// }

// function verificarNum(contador) {
//     if (contador === 0) {
//         return <p>contador nao iniciado</p>
//     } else {
//         return <p>contador iniciado</p>
//     }
// }
// const template =
//     <div className="contador">
//         <h1>Count : {contadorNum}</h1>
//         <div>
//             <h2>oi {nome.primeiroNome}</h2>
//             <h3>ola {nomeCompleto(nome)}</h3>

//             <button>+1</button>
//             <button>-1</button>
//             <button>reset</button>


//         </div>
//         {verificarNum(contadorNum)}
//     </div>

// function BemVinda(props){
//     return (
//         <div>
//     <h1>oi,{props.apelido} {props.idade} {props.saudacao} {props.signo}</h1>

//     </div>
//     )
// }

// inicio card gatinho com função**

// function Cards(props) {
//     return (
//         <div className="comentario">
//             <div>
//                 <img className="comentario__perfil" src={props.imagem} />
//             </div>

//             <div>
//                 <h1 className="comentario__nome">{props.nome}</h1>

//                 <h2 className="comentario__subtitulo">{props.saudacao}</h2>
//                 <hr />

//                 <p>{props.texto}</p>
//             </div>
//         </div>

//     )
// }

// function App(props) {
//     return (

//         <div>
//             <Cards
//                 imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
//                 nome="bb"
//                 saudacao="amei esse bb"
//                 texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, totam perferendis dolores. Harum voluptates magnam, modi voluptate minus esse quod ut!" />

//             <Cards
//                 imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
//                 nome="lindo"
//                 saudacao="amei esse lindo"
//                 texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, totam perferendis dolores odit praesentium ut officia, modi voluptate minus esse quod ut!" />
//         </div>

//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

// fim cad gatinho  com funçao**



// card gatinho transformado p componente (classe)

// class Cards extends React.Component {
//     render() {
//         return (
//             <div className="comentario">
//                 <div className="comentario__perfil">
//                     <img className="comentario__perfil" src={this.props.imagem} />
//                 </div>

//                 <div>
//                     <h1 className="comentario__nome">{this.props.nome}</h1>

//                     <h2 className="comentario__subtitulo">{this.props.saudacao}</h2>
//                     <hr />

//                     <p>{this.props.texto}</p>
//                 </div>
//             </div>

//         )
//     }
// }

// class App extends React.Component {
//     render() {
//         return (

//             <div>
//                 <Cards
//                     imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
//                     nome="bb"
//                     saudacao="amei esse bb"
//                     texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, totam perferendis dolores. Harum voluptates magnam, modi voluptate minus esse quod ut!" />

//                 <Cards
//                     imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
//                     nome="lindo"
//                     saudacao="amei esse lindo"
//                     texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, totam perferendis dolores odit praesentium ut officia, modi voluptate minus esse quod ut!" />
//             </div>

//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

// fim card gatinho com class **



// Botao soma****

// let count = 0
// class Contador extends React.Component {
//     addUm = () => {
//         count++
//         console.log(count)
//         ReactDOM.render(<Contador />, document.getElementById('root'));
//     }
//     subtrairUm = () => {
//         count--
//         console.log(count)
//         ReactDOM.render(<Contador />, document.getElementById('root'));
//     }
//     reset =() =>{
//         count=0
//         console.log(count)
//         ReactDOM.render(<Contador />, document.getElementById('root'));
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Count: {count} </h2>
//                 <button onClick={this.addUm}> +1 </button>
//                 <button onClick={this.subtrairUm}> -1 </button>
//                 <button onClick={this.reset}> reset</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Contador />, document.getElementById('root'));

// serviceWorker.unregister();

///FIM BOTÃO ***////


// inicio previsao do tempo com map //

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';


// //Aqui temos uma array com dois objetos dentro 
// let Tempo = [
//     {
//         id: 1,
//         data: '31/05/2019',
//         resumo: 'Ensolarado',
//         imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
//         temperatura: {
//             max: 31,
//             min: 20
//         }
//     },

//     {
//         id: 2,
//         data: '01/06/2019',
//         resumo: 'Nublado',
//         imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
//         temperatura: {
//             max: 25,
//             min: 18
//         }
//     }
// ]

// /* Aqui temos um componente React */
// class Estrutura extends React.Component{
//     render(){
//         return(
//             <div className="previsao-container">
//                 <Template />
//             </div>
//         )
//     }
// }

// /* Aqui temos outro componente React */
// class Template extends React.Component{
//     render() {
//         return Tempo.map(Tempo => {
//             return (
//                 <div className="previsao" key={Tempo.id}>
//                     <h2 className="previsao__data">{Tempo.data}</h2>
//                     <p className="previsao__resumo">{Tempo.resumo}</p>
//                     <img className="previsao__img" src={Tempo.imagem}></img>
//                     <table className="previsao-temperatura">
//                         <tbody>
//                             <tr className="previsao-temperatura__linha">
//                                 <th>Maxima</th>
//                                 <td>{Tempo.temperatura.max}ºC</td>
//                             </tr>
//                             <tr className="previsao-temperatura__linha">
//                                 <th>Minima</th>
//                                 <td>{Tempo.temperatura.min}ºC</td>
//                             </tr>

//                         </tbody>
//                     </table>
//                 </div>
//             )
//         })
//     }
// }


// // /*Esse metodo rendeniza os elemento dentro da pagina, tratando como parametros OQUE dever ser posto e AONDE. */
// ReactDOM.render(<Estrutura />, document.getElementById('root'));

//fim previsao de tempo com map//

// *** iINICIO PREV DE TEMPO COM .PROPS***//
// function Previsao(props) {
//     return (
//         <div className="previsao">
//             <h1 className="previsao__data ">{props.data}</h1>
//             <h2 className="previsao__resumo">{props.resumo}</h2>
//             <div>
//                 <img className="previsao__img" src={props.imagem} alt={props.descricao} />
//             </div>
//             <div className="previsao-temperatura">
//                 <p className="previsao-temperatura__linha">Máxima: {props.temperaturaMax}ºC</p>
//                 <p className="previsao-temperatura__linha">Mínima: {props.temperaturaMin}ºC</p>
//             </div>
//         </div>
//     )
// }

// function App() {
//     return (
//         <div className="previsao-container">
//             <Previsao
//                 data='31/05/2019'
//                 resumo='Ensolarado'
//                 imagem='https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'
//                 descricao="Tempo ensolarado"
//                 temperaturaMax={card1.max}
//                 temperaturaMin={card1.min}
//             />

//             <Previsao
//                 data='01/06/2019'
//                 resumo='Nublado'
//                 imagem='https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png'
//                 descricao="Tempo nublado"
//                 temperaturaMax={card2.max}
//                 temperaturaMin={card2.min}
//             />
//         </div>
//     )
// }
// ReactDOM.render(<App />, document.getElementById('root'))
// serviceWorker.unregister();

// **FIM COM .PROPS**

// CRIAR DOIS COMPONENTES :IMAGEM E TEMPERATURA  CHAMAR NO COMPONENTE PREVISÃO 

// const card1 = {
//     max: 31,
//     min: 20
// }

// const card2 = {
//     max: 31,
//     min: 20
// }
// const Titulo = (props) => {
//     return (
//         <div>
//             <h1 className="previsao__data ">{props.data}</h1>
//             <h2 className="previsao__resumo">{props.resumo}</h2>
//         </div>

//     )
// }

// // nao precisa de da div pq retorna apenas um componente
// const Imagem = (props) => {
//     return (

//         <img className="previsao__img" src={props.imagem} alt={props.descricao} />

//     )

// }

// const Temperatura = (props) => {
//     return (
//         <div className="previsao-temperatura">
//         <p className="previsao-temperatura__linha">Máxima: {props.temperaturaMax}ºC</p>
//         <p className="previsao-temperatura__linha">Mínima: {props.temperaturaMin}ºC</p>
//     </div>
//     )
// }

// function Previsao(props) {
//     return (
//         <div className="previsao">
//             <Titulo

//             // nao precisa do this pq nao é classe e sim função 

//                 data={props.data}
//                 resumo={props.resumo}
//             />
//             {/* <h1 className="previsao__data ">{props.data}</h1>
//             <h2 className="previsao__resumo">{props.resumo}</h2> */}

//             <Imagem 
//             imagem={props.imagem}

//             />
//             {/* <div>
//                 <img className="previsao__img" src={props.imagem} alt={props.descricao} />
//             </div> */}
//             {/* <div className="previsao-temperatura">
//                 <p className="previsao-temperatura__linha">Máxima: {props.temperaturaMax}ºC</p>
//                 <p className="previsao-temperatura__linha">Mínima: {props.temperaturaMin}ºC</p>
//             </div> */}

//             <Temperatura 
//              temperaturaMax={props.temperaturaMax}
//              temperaturaMin={props.temperaturaMin}
//             />
//         </div>
//     )
// }

// function App() {
//     return (
//         <div className="previsao-container">
//             <Previsao
//                 data='31/05/2019'
//                 resumo='Ensolarado'
//                 imagem='https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'
//                 descricao="Tempo ensolarado"
//                 temperaturaMax={card1.max}
//                 temperaturaMin={card1.min}
//             />

//             <Previsao
//                 data='01/06/2019'
//                 resumo='Nublado'
//                 imagem='https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png'
//                 descricao="Tempo nublado"
//                 temperaturaMax={card2.max}
//                 temperaturaMin={card2.min}
//             />
//         </div>
//     )
// }

// exercicio com state 

// let count = 0
// class Contador extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//         numContador:0
//         }
//     }

//     addUm = () =>
//     this.setState((estadoInicial) =>{
//         return {
//             numContador:estadoInicial.numContador + 1

//         }
//     }
//     )

//     subtrairUm = () => {
//        this.setState((estadoInicial) => {
//            return {
//                numContador:estadoInicial.numContador -1
//            }
//        })
//     }

//     // nao usa o estado anterior , por isso nao precisa do parametro estadoInicial 
//     reset =() =>{
//         this.setState(() => {
//             return {
//                 numContador: 0
//             }
//         })

//     }

//     render() {
//         return (
//             <div>
//                 <h2>Count: {this.state.numContador}</h2>
//                 <button onClick={this.addUm}> +1 </button>
//                 <button onClick={this.subtrairUm}> -1 </button>
//                 <button onClick={this.reset}> reset</button>
//                 <p>{this.state.numContador !== 0 ? 'contador iniciado':'contador nao iniciado'}</p>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Contador />, document.getElementById('root'));

// serviceWorker.unregister();


// **EXERCICIO PARA ESCONDER O BOTÃO E MUDAR O TEXTO DELE ***

class EscondeAparece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilidade: true
        }
    }

    componentDidMount() {
        console.log ('componente criado')
        alert ('componente criado')
    }

    mudarVisibilidade = () => {
      this.setState((estadoAnterior) => {
            return {
                visibilidade:!estadoAnterior.visibilidade
            }
        }
        )
    }

    render() {
        return (
        <div>
            <h1>Esconde-Aparece</h1>
            <button onClick= {this.mudarVisibilidade}>{this.state.visibilidade ? 'Esconder Detalhes' : 'Mostrar detalhes'}</button>
            <p> {this.state.visibilidade ? 'Voces são maravilhosas' : ' '} </p>
        </div>
        )
    }
}

ReactDOM.render(<EscondeAparece />, document.getElementById('root'));

serviceWorker.unregister();

// ***FIM EXERCICIO MUDAR BOTÃO E FRASE ****







