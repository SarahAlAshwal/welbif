import axios from 'axios';

export const start = () =>
  axios.post('https://welbi.org/api/start', {
    email: 'sa.alashwal@gmail.com',
  });

export const getResidents = (token: string) =>
  axios.get('https://welbi.org/api/residents', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getPrograms = (token: string) =>
  axios.get('https://welbi.org/api/programs', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
