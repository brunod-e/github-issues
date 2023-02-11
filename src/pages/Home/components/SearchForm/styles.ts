import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 54rem;
  margin: 4.5rem auto 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    width: 100%;
    color: ${({ theme }) => theme['base-text']};

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    background-color: ${({ theme }) => theme['base-input']};
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:active {
      border: 1px solid ${({ theme }) => theme['blue']};
      transition: 0.2s;
    }
  }
`;
