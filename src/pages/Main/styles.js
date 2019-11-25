import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: #fafafa;
  display: flex;
  height: 10vh;
  justify-content: center;
  padding: 3rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerUser = styled.div`
  font-size: 1.6rem;
  display: flex;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItems = styled.li`
  border-bottom: 2px solid transparent;
  color: #525252;
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.2em;
  margin: 0 2em 0 2em;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid #7be11a;
  }
`;

export const ContainerIcons = styled.div`
  font-size: 1.6rem;
  display: flex;

  div {
    margin: 5px;
    cursor: pointer;
  }
`;

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
  font-size: 3.5rem;
  color: #525252;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 0.2em;
  }
`;

export const SubTitle = styled.h1`
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
