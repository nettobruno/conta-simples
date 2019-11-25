import React from 'react';
// import { Link } from 'react-router-dom';

import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

import {
  Container,
  Menu,
  BlockUser,
  Header,
  ContainerIcons,
  Title,
  Content,
  List,
  ListItem,
  Block,
  ContainerItem,
} from './styles';

export default function Stratum() {
  return (
    <>
      <Container>
        <Menu>
          <BlockUser>
            <FaRegUserCircle />
            <span>Bruno Netto</span>
          </BlockUser>

          <nav>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Empréstimo</ListItem>
              <ListItem>Depositar</ListItem>
              <ListItem>Transferir</ListItem>
              <ListItem>Cartões</ListItem>
              <ListItem>Investimentos</ListItem>
              <ListItem>Indicar amigo</ListItem>
            </List>
          </nav>
        </Menu>

        <Content>
          <Header>
            <Title>Extrato</Title>

            <ContainerIcons>
              <div>
                <AiOutlineMail />
              </div>

              <div>
                <FiSettings />
              </div>
            </ContainerIcons>
          </Header>

          <Block>
            <ContainerItem>
              <ul>
                <li className="name">
                  <h1>Burguer King</h1>
                </li>
                <li className="date">
                  <h2>27/11</h2>
                </li>
                <li className="hour">
                  <h2>18:10</h2>
                </li>
                <li className="price">
                  <h2>-36.00</h2>
                </li>
              </ul>
            </ContainerItem>

            <ContainerItem>
              <ul>
                <li className="name">
                  <h1>Lojas Renner</h1>
                </li>
                <li className="date">
                  <h2>27/11</h2>
                </li>
                <li>
                  <h2 className="hour">15:27</h2>
                </li>
                <li className="price">
                  <h2>-99.99</h2>
                </li>
              </ul>
            </ContainerItem>
            <ContainerItem>
              <ul>
                <li className="name">
                  <h1>Cantinho da Vovó</h1>
                </li>
                <li className="date">
                  <h2>27/11</h2>
                </li>
                <li>
                  <h2 className="hour">12:10</h2>
                </li>
                <li className="price">
                  <h2>-250.90</h2>
                </li>
              </ul>
            </ContainerItem>
            <ContainerItem>
              <ul>
                <li className="name">
                  <h1>Mercado Dia</h1>
                </li>
                <li className="date">
                  <h2>26/11</h2>
                </li>
                <li>
                  <h2 className="hour">20:48</h2>
                </li>
                <li className="price">
                  <h2>-120.90</h2>
                </li>
              </ul>
            </ContainerItem>
            <ContainerItem>
              <ul>
                <li className="name">
                  <h1>Lojas Americanas</h1>
                </li>
                <li className="date">
                  <h2>26/11</h2>
                </li>
                <li>
                  <h2 className="hour">10:20</h2>
                </li>
                <li className="price">
                  <h2>-440.00</h2>
                </li>
              </ul>
            </ContainerItem>
            <ContainerItem>
              <ul>
                <li className="name">
                  <h1>Cell Comp Assistência</h1>
                </li>
                <li className="date">
                  <h2>23/11</h2>
                </li>
                <li>
                  <h2 className="hour">14:21</h2>
                </li>
                <li className="price">
                  <h2>-190.80</h2>
                </li>
              </ul>
            </ContainerItem>
          </Block>
        </Content>
      </Container>
    </>
  );
}
