import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



function CadastroVideo()
{
 return (
    <div>
      Cadastro de videos na plataforma
    </div>
 )
}



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
<BrowserRouter>
<Switch>
<Route path="/" component={App}/>
<Route path="/cadastro" component={CadastroVideo}/>

</Switch>
</BrowserRouter>,

  document.getElementById('root')
);



