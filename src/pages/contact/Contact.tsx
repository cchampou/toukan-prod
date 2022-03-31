import React from 'react';
import Input from '../../atoms/inputs/Input';
import { ContentContainer } from '../homepage/styles';
import { Columns } from './styles';
import TextArea from '../../atoms/inputs/TextArea';
import { Button } from '../../atoms/callToAction/styles';

function Contact() {
  return (
    <ContentContainer>
      <h1>Contact</h1>
      <Columns>
        <div>{/* <h2>contact@toukanproduction.com</h2> */}</div>
        <form>
          <Input id="name" label="Nom *" inputMode="text" />
          <Input inputMode="email" label="Email *" />
          <Input inputMode="tel" label="Numéro de téléphone" />
          <Input inputMode="text" label="Sujet" />
          <TextArea label="Message *" placeholder="Décrivez votre projet..." />
          <Button type="submit">Envoyer</Button>
        </form>
      </Columns>
    </ContentContainer>
  );
}

export default Contact;
