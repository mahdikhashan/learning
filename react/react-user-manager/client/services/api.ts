import axios from 'axios';

export function fakeApi<TResponse>(response: TResponse): Promise<TResponse> {
  return new Promise((res) => setTimeout(() => res(response), 50));
}

export async function Get<AxiosResponse>(path: string): Promise<AxiosResponse> {
  const { data } = await axios.get(path);
  return data;
}

export async function Post(path, body): Promise<unknown> {
  const { data } = await axios.post(path, body);
  return data;
}

export async function Delete(path): Promise<unknown> {
  const { data } = await axios.delete(path);
  return data;
}

export async function Put(path, body): Promise<unknown> {
  const { data } = await axios.put(path, body);
  return data;
}
