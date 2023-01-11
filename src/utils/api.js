const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token){
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken(){
    return localStorage.getItem('accessToken');
  }

  async function register({  })

})();

export default api;