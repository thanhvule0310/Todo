import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

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

const H1 = styled.h1`
  font-size: 5rem;
  padding-bottom: 5rem;
  text-transform: uppercase;
  color: var(--color-main);
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

class SignIn extends Component {
  _handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  _handleSubmit = value => {
    this.setState({ email: value.email, password: value.password });
    // console.log(value);
    console.log(this.state);
  };

  loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email.")
      .required("The email is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(6, "Too short.")
      .max(20, "Too long.")
  });

  render() {
    return (
      <Wrapper>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={this.loginSchema}
          onSubmit={this._handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <StyledForm>
              <H1>Log in</H1>
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
              <Button type="submit">Sign in</Button>
              <Other>
                <h3>
                  <span>Or</span>
                </h3>
                <Link to="/signup">
                  <p>Sign up</p>
                </Link>
              </Other>
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    );
  }
}

export default SignIn;
