import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-conta-simples.svg';

import { Background, Input, Button, Container } from './styles';

export default function Login() {
  return (
    <Background>
      <Container>
        <form>
          <img src={Logo} alt="Logo Conta Simples" />
          <div>
            <div>
              <Input type="number" placeholder="ID do usuário" />
            </div>

            <div>
              <Input type="number" placeholder="N° da agência" />
            </div>

            <div>
              <Input type="password" placeholder="Senha" />
            </div>

            <Link to="/Main">
              <Button>Entrar</Button>
            </Link>
          </div>
        </form>
      </Container>
    </Background>
  );
}
