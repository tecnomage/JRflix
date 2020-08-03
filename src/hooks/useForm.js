import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setvalues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setvalues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    const name = infosDoEvento.target.getAttribute('name');
    const { value } = infosDoEvento.target;
    console.log(`${name }  ${ value}`);

    setValue(name, value);
  }

  function clearForm() {
    setvalues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
