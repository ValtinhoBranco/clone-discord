import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';



const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {/*  <ChannelMessage

          author="Nome do Servidor"
          date="22/01/2021"
          content="Até quem fim terminei este proj"
        /> */}

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage

            author="Nome do Servidor"
            date="22/01/2021"
            content="Até quem fim terminei este proj"
          />

        ))}

        <ChannelMessage

          author="Nome do servidor"
          date="22/01/2021"
          content={
            <>
              <Mention>@Nome do servidor</Mention>, me add novamente, por favor?
            </>

          }

          hasMention
          isBot
        />


      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Converrsar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;