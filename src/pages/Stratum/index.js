import React from 'react';

import Sidemenu from '../../components/Sidebar';

import { Block, Title, ContainerItem } from './styles';

export default function Stratum() {
  return (
    <>
      <Sidemenu />

      <Block>
        <Title>Extrato</Title>
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
    </>
  );
}
