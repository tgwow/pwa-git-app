const url = `https://api.github.com/users/`;

// herança de tipo, isso é muito loco
// response tipo da resposta que o fetch retorna
// aqui estou incluindo um novo tipo pra essa resposta
interface ResponseData<T> extends Response {
  parsedBody?: T;
}

export async function logIn<T>(
  username: string
): Promise<ResponseData<T>> {
  const response: ResponseData<T> = await fetch(url + username);

  // faço o parse do response e incluo na minha nova propriedade
  response.parsedBody = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;

  // return body;
}