import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkContainer } from './styles';

interface ExternalLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  variant?: 'iconLeft';
}

export const ExternalLink = ({ label, icon, ...props }: ExternalLinkProps) => {
  return (
    <ExternalLinkContainer {...props}>
      {label}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  );
};
