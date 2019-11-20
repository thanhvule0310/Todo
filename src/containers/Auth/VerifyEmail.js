import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Heading from '../../components/UI/Heading/Heading';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../actions';
import Message from '../../components/UI/Message/Message';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 80%;
  background-color: var(--color-textBox);
  padding: 10rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 30rem;
    padding: 2rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
const VerifyEmail = ({ sendVerification, error, loading, cleanMessage }) => {
  useEffect(() => {
    cleanMessage();
  }, [cleanMessage]);
  return (
    <Wrapper>
      <Container>
        <img src="Todo/email.svg" alt="Email"></img>
        <Heading bold size="h1">
          Verify your email
        </Heading>
        <Heading size="h4">
          Go to your email inbox and verify your email.
        </Heading>
        <Button
          disabled={loading}
          loading={loading ? 'Sending email...' : null}
          onClick={() => sendVerification()}
        >
          Re-send verify email
        </Button>
        <Message error show={error ? true : false}>
          {error}
        </Message>
        <Message show={error === false} success>
          Re-send email success ! Check your inbox.
        </Message>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerification: actions.vertifyEmail,
  cleanMessage: actions.cleanMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
