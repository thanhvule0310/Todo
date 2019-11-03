import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  _handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this._handleSubmit}>
          <H1>Log in</H1>
          <Input
            placeholder="Email"
            size="small"
            type="email"
            name="email"
            _handleChange={this._handleChange}
          />
          <Input
            placeholder="Password"
            size="small"
            type="password"
            name="password"
            _handleChange={this._handleChange}
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
        </Form>
      </Wrapper>
    );
  }
}

export default SignIn;
