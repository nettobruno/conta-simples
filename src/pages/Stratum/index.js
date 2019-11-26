import React from 'react';

import Sidemenu from '../../components/Sidebar';
import ItemSaldo from '../../components/ItemSaldo';

import { Block, Title } from './styles';

export default function Stratum() {
  return (
    <>
      <Sidemenu />

      <Block>
        <Title>Extrato</Title>
        <ItemSaldo />
      </Block>
    </>
  );
}
