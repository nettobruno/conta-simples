import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  min-height: 100vh;
`;

export const Menu = styled.div`
  background: linear-gradient(
    to right top,
    rgb(5, 25, 55),
    rgb(0, 74, 120),
    rgb(0, 128, 147),
    rgb(0, 181, 118),
    rgb(123, 225, 26)
  );
`;

export const BlockUser = styled.div`
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  border-right: 1px solid #ddd;
`;

export const Header = styled.header`
  background-color: #fff;
  padding: 2em;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #7be11a;
  background-color: white;
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
  background-color: #ebebeb;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 1em;
`;

export const ListItem = styled.li`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.2em;
  margin: 1em 0 1em 0;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Block = styled.div`
  width: 100%;
  padding: 2em;
`;

export const ContainerItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #d3d3d3;
  padding: 1em;
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
  justify-items: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 2fr;
    text-align: center;
  }

  li {
    display: inline-block;
    margin: 0 2em 0 2em;
    text-align: center;
  }

  .name {
    color: #7be11a;
  }

  .price {
    color: #eb420f;
  }
  .date,
  .hour {
    color: #d3d3d3;
  }
`;
