import React from 'react';
import { Link } from 'react-router-dom';

import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

import Emprestimo from '../../assets/emprestimo.png';
import Depositar from '../../assets/depositar.png';
import Transferir from '../../assets/transferir.png';
import Cartoes from '../../assets/cartao.png';
import Investimentos from '../../assets/investimento.png';
import addAmigo from '../../assets/addAmigo.png';

import {
  Header,
  Nav,
  List,
  ListItems,
  ContainerIcons,
  ContainerUser,
  Content,
  Title,
  SubTitle,
  Block,
  ContainerBlock,
} from './styles';

export default function Main() {
  return (
    <>
      <Header>
        <Nav>
          <ContainerUser>
            <FaRegUserCircle />
            <span>Bruno Netto</span>
          </ContainerUser>

          <List>
            <ListItems>Home</ListItems>
            <Link to="/Stratum">
              <ListItems>Extrato</ListItems>
            </Link>
            <ListItems>Transações</ListItems>
          </List>

          <ContainerIcons>
            <div>
              <AiOutlineMail />
            </div>

            <div>
              <FiSettings />
            </div>
          </ContainerIcons>
        </Nav>
      </Header>

      <Content>
        <Title>Atalhos</Title>
        <ContainerBlock>
          <Block>
            <div>
              <img src={Emprestimo} alt="Icone empréstimo" />
              <SubTitle>Empréstimo</SubTitle>
            </div>
          </Block>
          <Block>
            <div>
              <img src={Depositar} alt="Icone depósito" />
              <SubTitle>Depositar</SubTitle>
            </div>
          </Block>
          <Block>
            <div>
              <img src={Transferir} alt="Icone de transferência" />
              <SubTitle>Transferir</SubTitle>
            </div>
          </Block>
        </ContainerBlock>

        <ContainerBlock>
          <Block>
            <div>
              <img src={Cartoes} alt="Icone de Cartão" />
              <SubTitle>Cartões</SubTitle>
            </div>
          </Block>
          <Block>
            <div>
              <img src={Investimentos} alt="Icone de investimento" />
              <SubTitle>Investimentos</SubTitle>
            </div>
          </Block>
          <Block>
            <div>
              <img src={addAmigo} alt="Icone de indicar amigo" />
              <SubTitle>Indicar Amigo</SubTitle>
            </div>
          </Block>
        </ContainerBlock>
      </Content>
    </>
  );
}
