import React from 'react';

import NumberFormat from 'react-number-format';

import { Container } from './styles';

export default class ContainerItem extends React.Component {
  constructor() {
    super();

    this.state = {
      records: [
        { name: 'Burguer King', date: '25/11', hour: '17:10', price: -36.0 },
        { name: 'Adidas', date: '25/11', hour: '18:30', price: -599.9 },
        { name: 'Salário', date: '26/11', hour: '20:00', price: 3500.0 },
        { name: 'Comida', date: '26/11', hour: '21:50', price: -25.0 },
        { name: 'Lojas Renner', date: '27/11', hour: '09:02', price: -72.0 },
        {
          name: 'Comp Assistência',
          date: '27/11',
          hour: '11:34',
          price: -136.0,
        },
        {
          name: 'Cantinho Mineiro',
          date: '27/11',
          hour: '12:18',
          price: -54.5,
        },
        { name: 'Estacionamento', date: '27/11', hour: '19:15', price: -45.0 },
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
            <h2>
              <NumberFormat
                value={record.price}
                decimalScale={2}
                fixedDecimalScale
                displayType="text"
                decimalSeparator=","
                thousandSeparator="."
                prefix="R$"
              />
            </h2>
          </li>
        </ul>
      </Container>
    ));
  }
}
