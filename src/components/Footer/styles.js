import styled from 'styled-components';

export const BlockFooter = styled.footer`
  color: #d3d3d3;
  padding: 2em;
  text-align: center;

  p {
    font-size: 1.3rem;
  }
`;

export const Img = styled.img`
  width: 15%;
`;

export const BlockIcon = styled.div`
  img {
    margin: 0.5em;
    transition: 0.3s;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
