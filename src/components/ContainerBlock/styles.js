import styled from 'styled-components';

export const TitleBlock = styled.h2`
  font-size: 2rem;
  color: #7be11a;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-template-rows: 40vh 40vh 40vh;
    grid-row-gap: 5vh;
    width: 100%;
    margin: 0 auto 5vh auto;
  }
`;

export const Block = styled.div`
  border-radius: 2em;
  box-shadow: 1px 1px 10px #ddd;
  height: 18em;
  margin: 1em;
  padding: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    box-shadow: 5px 5px 15px #c3c3c3;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
