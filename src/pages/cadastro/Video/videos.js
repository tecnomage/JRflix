import config from '../../../configs';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

const getAll = () => fetch(URL_VIDEOS).then((r) => {
  if (r.ok) {
    return r.json();
  }

  throw new Error('Não foi possível pegar os dados :(');
});

const create = (novoVideo) => fetch(URL_VIDEOS, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify(novoVideo),
}).then((r) => {
  if (r.ok) {
    return r.json();
  }

  throw new Error('Não foi possível cadastrar o vídeo :(');
});

export default {
  getAll,
  create,
};
