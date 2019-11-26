import React from 'react';

import Emprestimo from '../../assets/emprestimo.png';
import Depositar from '../../assets/depositar.png';
import Transferir from '../../assets/transferir.png';
import Cartoes from '../../assets/cartao.png';
import Investimento from '../../assets/investimento.png';
import addAmigo from '../../assets/addAmigo.png';

import { Container, Block, TitleBlock } from './styles';

export default function ContainerBlock() {
  return (
    <>
      <Container>
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
      </Container>

      <Container>
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
      </Container>
    </>
  );
}
