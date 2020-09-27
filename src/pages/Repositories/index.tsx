import React, {useContext, useEffect, useState} from 'react'

import Repository from '../../components/UI/Repository';

import './styles.scss';

import * as service from "../../services/auth";
import AuthContext, {User} from "../../contexts/auth";
import Header from "../../components/UI/Header";

export interface Repo {
  id?: number;
  name?: string;
  description?: string;
  stargazers_count? : number;
  rep: Repo;
  html_url?: string;
}

const Repositories: React.FC = () => {
  const [repo, setRepo] = useState<Repo[] | undefined>([]);
  const { user }  = useContext(AuthContext);
  const { repos_url } = user as User;

  useEffect(() => {
    async function loadRepositories() {
      const {status, msg} = await loadRepos(repos_url);
      if (status === 404) console.log(msg);
    }
    loadRepositories()
  }, [repos_url]);

  async function loadRepos(url: string) {
    try {
      const response = await service.get(url);
      const repos = await response.json();
      setRepo(repos);

      return {status: 200, msg: 'Ok'};

    } catch (e) {
      return {status: 404, msg: e.message};
    }
  }
  return (
    <>
      <section className="repositories">
        <Header title={`${repo?.length} repositorios`}/>
        <ul className="repositories__list">
          {
            repo?.map(rep => (
              <Repository key={rep.id} rep={rep} />
            ))
          }
        </ul>
      </section>
    </>
  )
}

export default Repositories;
