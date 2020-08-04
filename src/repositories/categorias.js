import config from '../configs';
//import objToQuerystring from '../helpers/objToQuerystring';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;
//const getAll = (query) => fetch(`${URL_CATEGORIES}${objToQuerystring(query)}`).then((r) => {
const getAll = (query) => fetch(`${URL_CATEGORIES}`).then((r) => {
  if (r.ok) {
    return r.json();
  }

  throw new Error('Não foi possível pegar os dados :(');
});

const getAllWithVideos = () => getAll({ _embed: 'videos' });

function getWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      console.log('servidor ok');
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error('nao foi possivel pegar os dados');
  });
}

export default {
  getWithVideos,
  getAll,
};
