import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Heading from '../../components/UI/Heading/Heading';
import * as actions from '../../actions';
import Message from '../../components/UI/Message/Message';
import * as Schema from '../../utils/Yup/Schema';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const Other = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;

  h3 {
    width: 100%;
    text-align: center;
    color: var(--color-main);
    border-bottom: 1px solid var(--color-main);
    line-height: 0.1em;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    margin: 10px 0 20px;
  }

  h3 span {
    background: var(--color-white);
    padding: 0 10px;
    width: 100%;
  }

  p {
    color: var(--color-main);
    font-size: 1.6rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-main);
  display: inline-block;
  &:not(:last-child) {
    padding-bottom: 2rem;
  }
`;

class SignIn extends Component {
  _handleSubmit = async (value, { setSubmitting }) => {
    const { history } = this.props;
    await this.props.signIn(value, history);
    setSubmitting(false);
  };

  componentDidMount() {
    this.props.cleanMessage();
  }

  render() {
    const { loading, error } = this.props;

    return (
      <Wrapper>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Schema.signIn}
          onSubmit={this._handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <StyledForm>
              <Heading size="h1" bold="true">
                Sign in
              </Heading>
              <Field
                type="email"
                name="email"
                placeholder="Your email..."
                component={Input}
              />
              <Field
                type="password"
                name="password"
                placeholder="Your password..."
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                loading={loading ? 'Logging...' : null}
              >
                Login
              </Button>
              <Message error show={error ? true : false}>
                {error}
              </Message>
              <Other>
                <StyledLink to="/recover-password">Forgor Password</StyledLink>
                <h3>
                  <span>Or</span>
                </h3>
                <StyledLink to="/signup">
                  <p>Sign up</p>
                </StyledLink>
              </Other>
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});

const mapDispatchToProps = {
  signIn: actions.signIn,
  cleanMessage: actions.cleanMessage
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
