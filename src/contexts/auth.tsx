import React, {createContext, useEffect, useState} from 'react';
import * as service from "../services/auth";

export interface User {
  login : string
  id: number
  avatar_url : string
  bio? : string
  company : string
  email : string
  location : string
  name : string
  public_repos : number
  public_gists : number
  followers : number
  following : number
  followers_url : string
  following_url : string
  organizations_url : string
  starred_url : string
}

interface UserData {
  loggedIn: boolean;
  user: User | null | undefined;
  logIn(username: string): Promise<{status: number, msg: string}>;
  logOut(): void;
}

const AuthContext = createContext<UserData>({} as UserData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocalStorage() {
      setLoading(false);

      const user = localStorage.getItem("@Auth:user");
      await new Promise((resolve) => setTimeout(resolve, 4000))
      if (user) {
        setUser(JSON.parse(user));
        setLoading(false);
      }
    }
    loadLocalStorage()
  }, [])


  async function logIn(username : string) {
    try {
      const { parsedBody } = await service.logIn<User | null>(username);
      setUser(parsedBody);
      localStorage.setItem('@Auth:user', JSON.stringify(parsedBody));

      return {status: 200, msg: 'Ok'};
    } catch(e) {
      return {status: 404, msg: e.message};
    }
  }

  function logOut() {
    setUser(null);
    localStorage.clear();
  }
  if (loading) {
    return <h1>loading</h1>
  }
  return (
    <AuthContext.Provider value={{loggedIn: !!user, user: user, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;


