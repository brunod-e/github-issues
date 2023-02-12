import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const IssueCardContainer = styled(Link)`
  align-items: center;
  height: 16.25rem;

  background-color: ${({ theme }) => theme['base-post']};

  border: 2px solid transparent;
  border-radius: 10px;

  padding: 2rem;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
    transition: 0.2s;
  }

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-title']};
      width: 70%;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
