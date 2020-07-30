import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setvalues] = useState(valoresIniciais);
  // const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

  function setValue(chave, valor) {
    setvalues({
      ...values,
      [chave]: valor,
    });
  }

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategorias([...categorias, values]);
    setvalues(valoresIniciais);
  }

  function handleChange(infosDoEvento) {
    const name = infosDoEvento.target.getAttribute('name');
    const { value } = infosDoEvento.target;

    setValue(name, value);
  }

  useEffect(() => {
    console.log('shoooooooooow');
    const URL_TOP = 'http://localhost:8080/categorias';
    // fetch(URL_TOP)
    //   .then((respostaDoServidor) => respostaDoServidor.json())
    //   .then((dados) => setCategorias([...dados]));

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria :
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="input"
          value={values.nome}
          name="nome"
          handleChange={handleChange}
        />
        <FormField
          type="textarea"
          label="Descricao"
          name="descricao"
          value={values.descricao}
          handleChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          handleChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>
      {categorias.length === 0 && (<div>Loading.....</div>)}
      <ul>
        {categorias.map((categoria, i) => {
          console.log(categoria);
          return <li key={i}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
