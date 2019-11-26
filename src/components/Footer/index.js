import React from 'react';

import Logo from '../../assets/logo-conta-simples.svg';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';

import { BlockFooter, BlockIcon, Img } from './styles';

export default function Footer() {
  return (
    <>
      <BlockFooter>
        <Img src={Logo} alt="Logo do Conta Simples" />
        <p>help@contasimples.com.br | (11) 94507-1807</p>
        <BlockIcon>
          <a href="https://www.facebook.com/contasimplesBR/" target="blank">
            <img src={Facebook} alt="Logo facebook" />
          </a>
          <a href="https://twitter.com/contasimplesBR" target="blank">
            <img src={Twitter} alt="Logo twitter" />
          </a>
          <a
            href="https://www.linkedin.com/company/contasimples"
            target="blank"
          >
            <img src={Linkedin} alt="Logo linkedin" />
          </a>
        </BlockIcon>
      </BlockFooter>
    </>
  );
}
