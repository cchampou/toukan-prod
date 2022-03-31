import React from 'react';
import Input from '../../atoms/inputs/Input';
import { ContentContainer } from '../homepage/styles';
import { Columns, Form, Information, SendButton } from './styles';
import TextArea from '../../atoms/inputs/TextArea';

function Contact() {
  return (
    <ContentContainer>
      <h1>Contact</h1>
      <Columns>
        <Information>
          <h2>Toukan Production</h2>
        </Information>
        <Form>
          <Input id="name" label="Nom *" inputMode="text" />
          <Input inputMode="email" label="Email *" />
          <Input inputMode="tel" label="Numéro de téléphone" />
          <Input inputMode="text" label="Sujet" />
          <TextArea label="Message *" placeholder="Décrivez votre projet..." />
          <SendButton type="submit">Envoyer</SendButton>
        </Form>
      </Columns>
    </ContentContainer>
  );
}

export default Contact;
