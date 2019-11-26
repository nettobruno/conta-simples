import React from 'react';
import Sidemenu from '../../components/Sidebar';
import Footer from '../../components/Footer';

import Emprestimo from '../../assets/emprestimo.png';
import Depositar from '../../assets/depositar.png';
import Transferir from '../../assets/transferir.png';
import Cartoes from '../../assets/cartao.png';
import Investimento from '../../assets/investimento.png';
import addAmigo from '../../assets/addAmigo.png';

import {
  Content,
  Title,
  TitleBlock,
  ContainerBlock,
  Block,
  Section,
  SubTitle,
} from './styles';

export default function Main() {
  return (
    <>
      <Sidemenu />

      <Content>
        <Title>Atalhos</Title>
        <ContainerBlock>
          <Block>
            <div>
              <img
                src={Emprestimo}
                className="emprestimoImg"
                alt="Icone empréstimo"
              />
              <TitleBlock>Empréstimo</TitleBlock>
            </div>
          </Block>
          <Block>
            <div>
              <img src={Depositar} alt="Icone depósito" />
              <TitleBlock>Depositar</TitleBlock>
            </div>
          </Block>
          <Block>
            <div>
              <img src={Transferir} alt="Icone de transferência" />
              <TitleBlock>Transferir</TitleBlock>
            </div>
          </Block>
        </ContainerBlock>

        <ContainerBlock>
          <Block>
            <div>
              <img src={Cartoes} alt="Icone de Cartão" />
              <TitleBlock>Cartões</TitleBlock>
            </div>
          </Block>
          <Block>
            <div>
              <img src={Investimento} alt="Icone de investimento" />
              <TitleBlock>Investimentos</TitleBlock>
            </div>
          </Block>
          <Block>
            <div>
              <img src={addAmigo} alt="Icone de indicar amigo" />
              <TitleBlock>Indicar Amigo</TitleBlock>
            </div>
          </Block>
        </ContainerBlock>
      </Content>

      <Section>
        <SubTitle>Facilidade e Segurança</SubTitle>
        <p>
          Aqui você terá grande simplicidade em controlar as suas movimentações
          financeiras, com alta proteção em cima de seus dados, e com uma equipe
          totalmente treinada para proporcionar o melhor atendimento.
        </p>
      </Section>

      <Footer />
    </>
  );
}
