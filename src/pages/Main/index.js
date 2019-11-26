import React from 'react';
import Sidemenu from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

import ContainerSaldo from '../../components/ContainerSaldo';

// Container com cada bloco de atalho
import ContainerBlock from '../../components/ContainerBlock';

import { Content, Title } from './styles';

export default function Main() {
  return (
    <>
      <Sidemenu />

      <Content>
        <Title>Atalhos</Title>
        <ContainerSaldo />
        <ContainerBlock />
      </Content>

      <Section />

      <Footer />
    </>
  );
}
