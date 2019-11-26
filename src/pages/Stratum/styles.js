import styled from 'styled-components';

export const Title = styled.h1`
  color: #525252;
  font-size: 3.5rem;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

export const Block = styled.div`
  padding-top: 4em;
  padding-bottom: 4em;
  margin: auto;
  width: 75%;
`;

export const ContainerItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #f0f0f0;
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
