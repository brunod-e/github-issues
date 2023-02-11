import styled from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 54rem;
  height: 13.25rem;

  margin: 0 auto;
  margin-top: -5rem;
  padding: 2rem 2.5rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  height: 8.5rem;
  margin-left: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-title']};
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`;
