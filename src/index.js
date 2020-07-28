import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video/';
import CadastroCategoria from './pages/cadastro/Categoria'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<div><h1>Erro 404</h1></div>)} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
