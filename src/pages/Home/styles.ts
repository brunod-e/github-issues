import styled from 'styled-components';

export const IssuesContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto 14rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
`;
