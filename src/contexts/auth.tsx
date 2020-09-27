import React, {createContext, Dispatch, useEffect, useState} from 'react';
import * as service from "../services/auth";

export interface User {
  login? : string
  id: number
  avatar_url?: string
  bio? : string
  company? : string
  email? : string
  location? : string
  name? : string
  public_repos : number
  public_gists : number
  followers : number
  following : number
  followers_url : string
  following_url? : string
  organizations_url? : string
  repos_url: string
  starred_url? : string
}

export interface UserData {
  loggedIn: boolean;
  user: User | null;
  get<T>(url: string | undefined): Promise<{status: number, msg: string, data?: T}>;
  logOut(): void;
  setUser : Dispatch<React.SetStateAction<User | null>>
}

const AuthContext = createContext<UserData>({} as UserData);

export const AuthProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<User | null>(null) ;

  useEffect(() => {
    async function loadLocalStorage() {
      const user = localStorage.getItem("@Auth:user");
      if (user)
        setUser(JSON.parse(user));
    }
    loadLocalStorage()
  }, [])

  async function get<T>(url : string)  {
    try {

      const response = await service.get(url);
      const data : T = await response.json();

      // setUser(parsedBody);
      // localStorage.setItem('@Auth:user', JSON.stringify(u));

      return {status: 200, msg: 'Ok', data};
    } catch(e) {
      return {status: 404, msg: e.message};
    }
  }

  function logOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{loggedIn: !!user, user: user, get, logOut, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;


