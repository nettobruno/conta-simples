import styled from 'styled-components';

export const Container = styled.div`
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
