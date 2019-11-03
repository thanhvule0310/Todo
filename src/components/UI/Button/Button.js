import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 50%;
  border-radius: 0.5rem;
  height: 4rem;
  transition: all 0.2s;
  font-size: 2rem;
  font-weight: 300;
  border: none;
  color: var(--color-white);
  background-color: var(--color-mainLight);
  text-align: center;
  &:hover {
  }

  &:active {
    /* transform: scale(1); */
  }
`;

class Button extends Component {
  render() {
    return (
      <ButtonStyled type={this.props.type}>{this.props.children}</ButtonStyled>
    );
  }
}

export default Button;
