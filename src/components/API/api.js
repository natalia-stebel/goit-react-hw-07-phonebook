import axios from 'axios';

const BASE_URL = 'https://633c5eb174afaef16407feaa.mockapi.io/';

export async function getContacts() {
  return await axios.get(`${BASE_URL}contacts`);
}

export async function addContact(item) {
  return await axios.post(`${BASE_URL}contacts`, item);
}

export async function deleteContact(id) {
  return await axios.delete(`${BASE_URL}contacts/${id}`);
}
