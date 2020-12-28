import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

// const setToken = loadedToken => (token = loadedToken);

// const baseURL = 'https://goit-phonebook-api.herokuapp.com';
// let token = '';

// export const login = userData =>
//   fetch(`${baseURL}/users/login`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   })
//     .then(res => res.json())
//     .then(data => {
//       setToken(data.token);

//       return data;
//     });

// export const logout = () =>
//   fetch(`${baseURL}/users/logout`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: token,
//     },
//   }).then(res => res.json());

export const login = userData =>
  axios.post('/users/login', userData).then(({ data }) => {
    setToken(data.token);

    return data;
  });

export const logout = () => axios.post('/users/logout');

export const getContacts = () =>
  axios.get('/contacts').then(({ data }) => data);

export const addContact = payload =>
  axios.post('/contacts', payload).then(({ data }) => data);

export const deleteContact = id => axios.delete(`/contacts/${id}`);
