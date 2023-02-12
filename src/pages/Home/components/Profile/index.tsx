import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileContainer, ProfileInfo } from './styles';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ExternalLink } from '../../../../components/ExternalLink';
import { api } from '../../../../lib/axios';
import { Spinner } from '../../../../components/Spinner';

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

const username = import.meta.env.VITE_USERNAME;

export const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);
      const data = response.data;

      setProfileData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img src={profileData.avatar_url} alt='Imagem do perfil' />
          <ProfileInfo>
            <header>
              <h1>{profileData.name}</h1>

              <ExternalLink
                href={profileData.html_url}
                text='GITHUB'
                target='_blank'
              />
            </header>

            <p>{profileData.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}

              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfileInfo>
        </>
      )}
    </ProfileContainer>
  );
};
