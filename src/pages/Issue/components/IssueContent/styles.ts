import styled from 'styled-components';

export const IssueContentContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    border: 2px solid ${({ theme }) => theme['blue']};
    border-radius: 10px;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme['blue']};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background-color: ${({ theme }) => theme['base-post']};
    border-radius: 10px;
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;
