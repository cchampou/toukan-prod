import React from 'react';
import { RentalImageContainer, RentalItemContainer } from './styles';

type Props = {
  image: string;
  name: string;
  price: number;
};

function RentalItem({ image, name, price }: Props) {
  return (
    <RentalItemContainer>
      <RentalImageContainer>
        <img src={image} alt={name} />
      </RentalImageContainer>
      <h4>{name}</h4>
      <h2
        style={{
          textAlign: 'left',
          margin: 0,
          marginTop: 'auto',
        }}
      >
        {price}€/J
      </h2>
    </RentalItemContainer>
  );
}

export default RentalItem;
