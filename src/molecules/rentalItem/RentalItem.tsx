import React from 'react';
import BM4K from '../../assets/images/rental/BMPCC4K.png';
import { RentalItemContainer } from './styles';

type Props = {
  image: string;
  name: string;
  price: number;
};

function RentalItem({ image, name, price }: Props) {
  return (
    <RentalItemContainer>
      <img src={image} alt={name} width="80%" />
      <h4>{name}</h4>
      <h2 style={{ textAlign: 'left' }}>{price}€/J</h2>
    </RentalItemContainer>
  );
}

export default RentalItem;
