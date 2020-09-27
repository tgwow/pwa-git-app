// herança de tipo, isso é muito loco
// response tipo da resposta que o fetch retorna
// aqui estou incluindo um novo tipo pra essa resposta
// type ResponseData2<T> = {
//   parsedBody: T;
// }
// type ResponseDataUser<T> = ResponseData2<T> | Response;
//
// interface ResponseData<T> extends Response {
//   parsedBody?: T;
// }
export interface HeaderProps {
  Authorization?: Headers | string[][]
}

export async function get(url : string, args?: HeaderProps): Promise<Response> {
  const headers : HeadersInit = {
    'Authorization': `${args?.Authorization|| process.env.REACT_APP_GIT_TOKEN }`
  }
  const response : Response = await fetch(url, headers);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}