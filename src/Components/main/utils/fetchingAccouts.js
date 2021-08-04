const URL = "https://api.github.com/";

function fetchingAccountsAPI(nameAccount, cancelToken) {
  return fetch(`${URL}search/users?q=${nameAccount}&per_page=8`, cancelToken)
    .then((res) => res.json())
    .then((data) => {
      if (!data.message) {
        return data.items;
      }
    });
}

function fetchingAccountByNameAPI(nameAccount, cancelToken) {
  return fetch(`https://api.github.com/users/${nameAccount}`, cancelToken)
    .then((res) => res.json())
    .then((data) => data);
}

function fetchingAccountReposByNameAPI(nameAccount, currPage, cancelToken) {
  return fetch(
    `https://api.github.com/users/${nameAccount}/repos?&per_page=6&page=${currPage}`,
    cancelToken
  )
    .then((res) => res.json())
    .then((data) => data);
}

// catalinmiron

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchingAccountsAPI,
  fetchingAccountByNameAPI,
  fetchingAccountReposByNameAPI,
};
