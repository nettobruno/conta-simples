import React from 'react';

import { Container } from './styles';

export default class ContainerItem extends React.Component {
  constructor() {
    super();

    this.state = {
      records: [
        { name: 'Burguer King', date: '27/11', hour: '18:10', price: -36.0 },
        { name: 'Adidas', date: '27/11', hour: '17:30', price: -599.0 },
        { name: 'Salário', date: '27/11', hour: '20:00', price: 3500.0 },
        { name: 'Comida', date: '27/11', hour: '21:50', price: -25.0 },
      ],
    };
  }

  render() {
    const { records } = this.state;
    return records.map(record => (
      <Container>
        <ul>
          <li className="name">
            <h1>{record.name}</h1>
          </li>
          <li className="date">
            <h2>{record.date}</h2>
          </li>
          <li className="hour">
            <h2>{record.hour}</h2>
          </li>
          <li className="price">
            <h2>{record.price}</h2>
          </li>
        </ul>
      </Container>
    ));
  }
}
