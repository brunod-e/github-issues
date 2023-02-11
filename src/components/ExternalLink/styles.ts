import styled, { css } from 'styled-components';

interface ExternalLinkProps {
  variant?: 'iconLeft';
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme['blue']};

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: ${({ theme }) => theme['blue']};
    transition: 0.2s;
  }
`;
