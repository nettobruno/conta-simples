import styled from 'styled-components';

export const Content = styled.div`
  margin: auto;
  width: 75%;
  padding: 2em;

  @media (max-width: 800px) {
    width: 100%;
    margin: auto;
  }
`;

export const Title = styled.h1`
  color: #525252;
  font-size: 3.5rem;
  margin-top: 1.8em;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 0.2em;
  }
`;
