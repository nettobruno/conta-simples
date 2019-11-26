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

export const TitleBlock = styled.h2`
  font-size: 2rem;
  color: #7be11a;
`;

export const ContainerBlock = styled.div`
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

export const Section = styled.section`
  background-color: #7be11a;
  color: #fff;
  padding: 6em;

  p {
    font-size: 1.6rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5em;
`;
