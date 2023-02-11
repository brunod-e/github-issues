import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileContainer, ProfileInfo } from './styles';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ExternalLink } from '../../../../components/ExternalLink';

export const Profile = () => {
  return (
    <ProfileContainer>
      <img
        src='https://avatars.githubusercontent.com/u/55602031?v=4'
        alt='Imagem do perfil'
      />
      <ProfileInfo>
        <header>
          <h1>Cameron Williamson</h1>

          <ExternalLink href='' label='GITHUB' />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </ul>
      </ProfileInfo>
    </ProfileContainer>
  );
};
