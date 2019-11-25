import React from 'react';
import Sidemenu from '../../components/Sidebar';
// import { Link } from 'react-router-dom';

// import { FaRegUserCircle } from 'react-icons/fa';

import Emprestimo from '../../assets/emprestimo.png';
import Depositar from '../../assets/depositar.png';
import Transferir from '../../assets/transferir.png';
import Cartoes from '../../assets/cartao.png';
import Investimentos from '../../assets/investimento.png';
import addAmigo from '../../assets/addAmigo.png';

import { Content, Title, SubTitle, Block, ContainerBlock } from './styles';

export default function Main() {
  return (
    <>
      <Sidemenu />

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
