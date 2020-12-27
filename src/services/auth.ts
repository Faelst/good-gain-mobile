import { api } from './api';

export async function signIn(data: { email: string; password: string }) {
  const _response = await api.post('/login', data);

  return _response.data;
}
