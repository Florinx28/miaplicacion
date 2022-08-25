import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import{App} from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);

/*
//Crear componente para que lsovalores no sean estáticos y puedan ir cambiando

                          //props
function Componente({titulo, children}) {
 // console.log(props);


  return (
    <div>
      <h1>{titulo}</h1>
      <div>{props.children}</div>
    </div>
  );
}
*/

//root.render(<Componente titulo = "Título" contenido ="Código html mendiante React mediante JSX<" />);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
