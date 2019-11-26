import React from 'react';
import Sidemenu from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

// Container com cada bloco de atalho
import ContainerBlock from '../../components/ContainerBlock';

import { Content, Title } from './styles';

export default function Main() {
  return (
    <>
      <Sidemenu />

      <Content>
        <Title>Atalhos</Title>
        <ContainerBlock />
      </Content>

      <Section />

      <Footer />
    </>
  );
}
