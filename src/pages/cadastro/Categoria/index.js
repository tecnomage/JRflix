import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function UseForm(valoresIniciais) {
  const [values, setvalues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    console.log('setValues');
    setvalues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    const name = infosDoEvento.target.getAttribute('name');
    const { value } = infosDoEvento.target;
    console.log('handleChange');
    setValue(name, value);
  }

  function clearForm() {
    setvalues(valoresIniciais);
    console.log('clear');
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);

  // const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

  const { handleChange, values, clearForm } = UseForm(valoresIniciais);

  // function setValue(chave, valor) {
  //   setvalues({
  //     ...values,
  //     [chave]: valor,
  //   });
  // }

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategorias([...categorias, values]);

    clearForm();
  }

  useEffect(() => {
    // const URL_TOP = 'https://jrflix.herokuapp.com/categorias';
    // fetch(URL_TOP)
    //   .then((respostaDoServidor) => respostaDoServidor.json())
    //   .then((dados) => setCategorias([...dados]));

    const URL_TOP = 'http://localhost:8080/categorias';
    // const URL_TOP = 'https://jrflix.herokuapp.com/categorias';
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
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="input"
          value={values.titulo}
          name="titulo"
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
  //console.log(categoria)
  return <li key={i}>{categoria.titulo}</li>})}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
