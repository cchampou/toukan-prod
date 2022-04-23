import React from 'react';
import { Helmet } from 'react-helmet';
import Input from '../../atoms/inputs/Input';
import { ContentContainer } from '../homepage/styles';
import { Columns, Form, Information, SendButton } from './styles';
import TextArea from '../../atoms/inputs/TextArea';
import { useContactForm } from './hooks';

function Contact() {
  const { handleSubmit, handleChange, state } = useContactForm();

  return (
    <ContentContainer>
      <Helmet>
        <title>Contacter Toukan Production</title>
      </Helmet>
      <h1>Contact</h1>
      <Columns>
        <Information>
          <h2>Toukan Production</h2>
        </Information>
        <Form onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            label="Nom *"
            inputMode="text"
            onChange={handleChange}
            value={state.name}
          />
          <Input
            inputMode="email"
            label="Email *"
            name="email"
            onChange={handleChange}
            value={state.email}
          />
          <Input
            inputMode="tel"
            name="phone"
            label="Numéro de téléphone"
            onChange={handleChange}
            value={state.phone}
          />
          <Input
            inputMode="text"
            label="Sujet"
            name="subject"
            value={state.subject}
            onChange={handleChange}
          />
          <TextArea
            label="Message *"
            name="content"
            placeholder="Décrivez votre projet..."
            onChange={handleChange}
            value={state.content}
          />
          <SendButton type="submit">Envoyer</SendButton>
        </Form>
      </Columns>
    </ContentContainer>
  );
}

export default Contact;
