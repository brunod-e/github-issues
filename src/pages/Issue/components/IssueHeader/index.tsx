import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import { IssueType } from '../..';
import { ExternalLink } from '../../../../components/ExternalLink';
import { Spinner } from '../../../../components/Spinner';
import { dateFormatter } from '../../../../utils/formatter';
import { IssueHeaderContainer } from './styles';

interface IssueHeaderProps {
  data: IssueType;
  isLoading: boolean;
}

export const IssueHeader = ({ data, isLoading }: IssueHeaderProps) => {
  const navigate = useNavigate();
  const { html_url, user, created_at, comments, title } = data;
  const formattedDate = dateFormatter(created_at);

  const handleGoBackHome = () => {
    navigate('/');
  };

  return (
    <IssueHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              text='Voltar'
              variant='iconLeft'
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              onClick={handleGoBackHome}
            />

            <ExternalLink
              href={html_url}
              text='Ver no github'
              target='_blank'
            />
          </header>

          <h1>{title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {comments} comentários
            </li>
          </ul>
        </>
      )}
    </IssueHeaderContainer>
  );
};
