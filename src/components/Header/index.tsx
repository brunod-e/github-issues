import { HeaderContainer } from './styles';
import logoImg from '../../assets/header-logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logoImg} alt='' />
      </div>
    </HeaderContainer>
  );
};
