import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './style.css';

import { FiSettings } from 'react-icons/fi';
import { AiOutlineMail, AiOutlinePoweroff } from 'react-icons/ai';

export default function SideMenu() {
  return (
    <header>
      <Menu>
        <a className="menu-item" href="/Main">
          Home
        </a>

        <a className="menu-item" href="/Stratum">
          Extrato
        </a>

        <a className="menu-item" href="/Emprestimo">
          Empréstimo
        </a>

        <a className="menu-item" href="/Depositar">
          Depositar
        </a>

        <a className="menu-item" href="/Transferir">
          Transferir
        </a>

        <a className="menu-item" href="/Cartoes">
          Cartões
        </a>

        <a className="menu-item" href="/Investimentos">
          Investimentos
        </a>

        <a className="menu-item" href="/IndicarAmigo">
          Indicar Amigo
        </a>

        <div id="blockIcons">
          <a className="icon" href="/Notifications">
            <AiOutlineMail />
          </a>

          <a className="icon" href="/Settings">
            <FiSettings />
          </a>

          <a className="icon" href="/">
            <AiOutlinePoweroff />
          </a>
        </div>
      </Menu>
    </header>
  );
}
