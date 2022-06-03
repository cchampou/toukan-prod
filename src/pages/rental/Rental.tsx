import React from 'react';
import { Helmet } from 'react-helmet';
import { Columns } from '../contact/styles';
import BM4K from '../../assets/images/rental/BMPCC4K.png';
import BM6K from '../../assets/images/rental/BMPCC6KPRO.png';
import Fuji from '../../assets/images/rental/Fuji X-T30 II.png';
import { ContentContainer } from '../homepage/styles';
import RentalItem from '../../molecules/rentalItem/RentalItem';

function Rental() {
  return (
    <ContentContainer>
      <h1>Location</h1>
      <Helmet>
        <title>La location Toukan Production</title>
      </Helmet>
      <Columns>
        <p>
          Vous trouverez ici les produits que nous mettons à votre disposition
          et leurs tarifs. Si la location d&apos;un ou plusieurs vous interesse,
          contactez-nous en indiquant les références et la date à laquelle vous
          souhaitez les louer.
        </p>
      </Columns>
      <Columns>
        <RentalItem
          image={BM4K}
          name="BlackMagic Pocket Cinema Camera 4K"
          price={40}
        />
        <RentalItem
          image={BM6K}
          name="BlackMagic Pocket Cinema Camera 6K Pro"
          price={75}
        />
        <RentalItem image={Fuji} name="Fuji X-T30" price={20} />
      </Columns>
    </ContentContainer>
  );
}

export default Rental;
