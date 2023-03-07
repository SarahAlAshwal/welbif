import axios from 'axios';
import { Resident } from '../types';

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

export const postResident = (token: string, data: Resident) =>
  axios.post('https://welbi.org/api/residents', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const postProgram = (token: string, data: Resident) =>
  axios.post('https://welbi.org/api/programs', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const assignAttendee = (
  token: string,
  program: number,
  residentId: number,
  status: string
) =>
  axios.post(
    `https://welbi.org/api/programs/${program}/attend`,
    {
      programId: program,
      residentId,
      status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
