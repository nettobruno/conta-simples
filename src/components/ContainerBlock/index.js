import React from 'react';

import Emprestimo from '../../assets/emprestimo.png';
import Depositar from '../../assets/depositar.png';
import Transferir from '../../assets/transferir.png';
import Cartoes from '../../assets/cartao.png';
import Investimento from '../../assets/investimento.png';
import addAmigo from '../../assets/addAmigo.png';

import { Container, Block, TitleBlock } from './styles';

export default class ContainerBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      records: [
        { name: 'Empréstimo', img: Emprestimo, alt: 'Icone empréstimo' },
        { name: 'Depositar', img: Depositar, alt: 'Icone Depósito' },
        { name: 'Transferir', img: Transferir, alt: 'Icone Tranferir' },
        { name: 'Cartões', img: Cartoes, alt: 'Icone Cartões' },
        { name: 'Investimento', img: Investimento, alt: 'Icone Investimento' },
        {
          name: 'Adicionar Amigo',
          img: addAmigo,
          alt: 'Icone Adicionar Amigo',
        },
      ],
    };
  }

  render() {
    const { records } = this.state;
    return (
      <Container>
        {records.map(record => (
          <Block>
            <div>
              <img src={record.img} alt={record.alt} />
              <TitleBlock>{record.name}</TitleBlock>
            </div>
          </Block>
        ))}
      </Container>
    );
  }
}
