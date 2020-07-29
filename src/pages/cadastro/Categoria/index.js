import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

function CadastroCategoria() {
  const [nomeDaCategoria, setNomeDaCategoria] = useState("Filmes");
  const [categorias, setCategorias] = useState(['Teste']);
  
  const valoresIniciais = {
    nome: "texto inicial",
    descricao: "descricao",
    cor: "#0000",
  };
  const [values, setvalues] = useState(valoresIniciais);

  //console.log(nomeDaCategoria);

  function setValue(chave, valor) {
    setvalues({
      ...values,
      [chave]: valor,
    });
  }

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
      setCategorias([...categorias, nomeDaCategoria]);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria : {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="nome"
              value={values.nome}
              onChange={(e) => setValue(e.target.getAttribute('name'), e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Descricao:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={(e) => setValue(e.target.getAttribute('name'), e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              name= 'cor'
              value={values.cor}
              onChange={(e) => setValue(e.target.getAttribute('name'), e.target.value)}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria,i) => {
          console.log(categoria)
          return (<li key={i}>{categoria.nome}</li>);
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
