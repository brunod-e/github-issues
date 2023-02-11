import { Header } from '../../components/Header';
import { IssueCard } from './components/IssueCard';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';
import { IssuesContainer } from './styles';

export const Home = () => {
  return (
    <>
      <Header />
      <Profile />

      <SearchForm />
      <IssuesContainer>
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </IssuesContainer>
    </>
  );
};
