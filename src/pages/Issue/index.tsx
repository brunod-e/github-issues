import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { IssueContent } from './components/IssueContent';
import { IssueHeader } from './components/IssueHeader';

export interface IssueType {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

const username = import.meta.env.VITE_USERNAME;
const repo = import.meta.env.VITE_REPONAME;

export const Issue = () => {
  const [issueData, setIssueData] = useState<IssueType>({} as IssueType);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getIssueDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/repos/${username}/${repo}/issues/${id}`);
      const data = response.data;

      setIssueData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [issueData]);

  useEffect(() => {
    getIssueDetails();
  }, []);

  return (
    <>
      <IssueHeader data={issueData} isLoading={isLoading} />
      {!isLoading && <IssueContent content={issueData.body} />}
    </>
  );
};
