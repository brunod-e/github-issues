import styled from 'styled-components';

export const IssueHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  width: 100%;
  min-height: 10.5rem;

  margin-top: -5.5rem;
  padding: 2rem;

  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};

  gap: 0.5rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme['base-span']};

      svg {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`;
