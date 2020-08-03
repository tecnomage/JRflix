import config from '../configs';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error('nao foi possivel pegar os dados');
  });
}

export default {
  getWithVideos,
};
