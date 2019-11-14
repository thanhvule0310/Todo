import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Heading from '../../components/UI/Heading/Heading';
import * as actions from '../../actions';
import Message from '../../components/UI/Message/Message';

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
  width: 30%;
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

class SignUp extends Component {
  _handleSubmit = async (value, { setSubmitting }) => {
    const { history } = this.props;
    await this.props.signUp(value, history).then(() => {});
    setSubmitting(false);
  };

  loginSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required.')
      .max(20, 'Too long.'),
    email: Yup.string()
      .email('Invalid email.')
      .required('The email is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Too short.')
      .max(20, 'Too long.'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirm is required')
  });
  componentDidMount() {
    this.props.cleanMessage();
  }
  render() {
    const { loading, error } = this.props;

    return (
      <Wrapper>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
          }}
          validationSchema={this.loginSchema}
          onSubmit={this._handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <StyledForm>
              <Heading size="h1" bold="true">
                Sign up
              </Heading>
              <Field
                type="text"
                name="name"
                placeholder="Your name..."
                component={Input}
              />
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
              <Field
                type="password"
                name="passwordConfirm"
                placeholder="Retype password..."
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                loading={loading ? 'Creating...' : null}
              >
                Create account
              </Button>
              <Message error show={error ? true : false}>
                {error}
              </Message>
              <Other>
                <h3>
                  <span>Or</span>
                </h3>
                <Link to="/signin">
                  <p>Sign in</p>
                </Link>
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
  signUp: actions.signUp,
  cleanMessage: actions.cleanMessage
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
