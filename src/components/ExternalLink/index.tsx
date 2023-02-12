import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';
import { ExternalLinkContainer } from './styles';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: React.ReactNode;
  variant?: 'iconLeft';
};

export const ExternalLink = ({ text, icon, ...props }: ExternalLinkProps) => {
  return (
    <ExternalLinkContainer {...props}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  );
};
