import { dateFormatter } from '../../../../utils/formatter';
import { IssueType } from '../../../Issue';
import { IssueCardContainer } from './styles';

interface IssueCardProps {
  issue: IssueType;
}

export const IssueCard = ({ issue }: IssueCardProps) => {
  const { title, body, created_at, number } = issue;

  const formattedDate = dateFormatter(created_at);

  return (
    <IssueCardContainer to={`/issue/${number}`}>
      <header>
        <h2>{title}</h2>
        <span>{formattedDate}</span>
      </header>
      <p>{body}</p>
    </IssueCardContainer>
  );
};
