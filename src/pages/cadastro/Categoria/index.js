import React, { useState } from 'react';
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
    console.log(chave);
    console.log(valor);

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
