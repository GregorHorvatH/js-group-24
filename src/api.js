export const login = userData =>
  Promise.resolve({
    user: { name: 'Test User', email: 'test.user@mail.com' },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmVhMDY0Y2I4ZmY0ODAwMTdhNWRiMjYiLCJpYXQiOjE2MDkxNzU4Nzh9.ufolexUx_gmDMl7-xnAcN5QReRmOHeJnfHjgGfUzFi0',
  });

export const logout = () => Promise.resolve();

export const getContacts = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'Bobby',
      number: '12345',
    },
  ]);

export const addContact = payload => Promise.resolve(payload);
