import { useCallback, useEffect, useState } from 'react';
import { Spinner } from '../../components/Spinner';
import { api } from '../../lib/axios';
import { IssueType } from '../Issue';
import { IssueCard } from './components/IssueCard';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';
import { IssuesContainer } from './styles';

const username = import.meta.env.VITE_USERNAME;
const repo = import.meta.env.VITE_REPONAME;

export const Home = () => {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getIssues = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repo}%20label:published`
        );
        const data = response.data.items;

        setIssues(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [issues]
  );

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <>
      <Profile />
      <SearchForm issuesLength={issues.length} getIssues={getIssues} />

      {isLoading ? (
        <Spinner />
      ) : (
        <IssuesContainer>
          {issues.map((issue) => (
            <IssueCard key={issue.number} issue={issue} />
          ))}
        </IssuesContainer>
      )}
    </>
  );
};
