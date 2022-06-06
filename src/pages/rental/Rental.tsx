import React from 'react';
import { Helmet } from 'react-helmet';
import { Columns } from '../contact/styles';
import BM4K from '../../assets/images/rental/BMPCC4K.png';
import BM6K from '../../assets/images/rental/BMPCC6KPRO.png';
import Fuji from '../../assets/images/rental/Fuji X-T30 II.png';
import Mavic3 from '../../assets/images/rental/Mavic 3.png';
import RoninS2 from '../../assets/images/rental/Ronin S2.png';
import leica1235 from '../../assets/images/rental/Leica 12-35.png';
import samyang8 from '../../assets/images/rental/Samyang 8mm.png';
import samyang14 from '../../assets/images/rental/Samyang 14mm.png';
import samyang24 from '../../assets/images/rental/Samyang 24mm.png';
import samyang35 from '../../assets/images/rental/Samyang 35mm.png';
import samyang50 from '../../assets/images/rental/Samyang 50mm.png';
import samyang85 from '../../assets/images/rental/Samyang 85mm.png';
import { ContentContainer } from '../homepage/styles';
import RentalItem from '../../molecules/rentalItem/RentalItem';
import { RentalColumns } from './styles';

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
      <h2>Les caméras</h2>
      <RentalColumns>
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
      </RentalColumns>
      <h2>Les objectifs</h2>
      <RentalColumns>
        <RentalItem image={leica1235} name="Leica 12-35mm" price={25} />
        <RentalItem image={samyang8} name="Samyang 8mm" price={10} />
        <RentalItem image={samyang14} name="Samyang 14mm" price={15} />
        <RentalItem image={samyang24} name="Samyang 24mm" price={20} />
        <RentalItem image={samyang35} name="Samyang 35mm" price={30} />
        <RentalItem image={samyang50} name="Samyang 50mm" price={15} />
        <RentalItem image={samyang85} name="Samyang 85mm" price={25} />
      </RentalColumns>
      <h2>Matériel DJI</h2>
      <RentalColumns>
        <RentalItem image={Mavic3} name="Mavic 3" price={50} />
        <RentalItem image={RoninS2} name="Ronin S2" price={25} />
      </RentalColumns>
    </ContentContainer>
  );
}

export default Rental;
