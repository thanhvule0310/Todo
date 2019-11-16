import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import Heading from '../../components/UI/Heading/Heading';
import Input from '../../components/UI/Input/Input';
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
  background-color: var(--color-white);
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
const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.')
});

const RecoverPassword = ({
  loading,
  error,
  cleanMessage,
  sendEmailRecover
}) => {
  //TODO: Clean old message
  useEffect(() => {
    cleanMessage();
  }, [cleanMessage]);

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={emailSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await sendEmailRecover(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Wrapper>
            <Container>
              <img src="/key.svg" alt="Key"></img>
              <Heading size="h1">Recover your password</Heading>
              <Heading size="h4">
                Type in your e-mail to recover your password
              </Heading>
              <Field
                type="email"
                name="email"
                placeholder="Your email..."
                component={Input}
              />
              <Button
                disabled={loading}
                loading={loading ? 'Sending recover email...' : null}
                type="submit"
              >
                Send recover email
              </Button>
              <Message error show={error ? true : false}>
                {error}
              </Message>
              <Message show={error === false} success>
                Recovery sent to your email !
              </Message>
            </Container>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoveryPassword.loading,
  error: auth.recoveryPassword.error
});

const mapDispatchToProps = {
  sendEmailRecover: actions.recoveryPassword,
  cleanMessage: actions.cleanMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
