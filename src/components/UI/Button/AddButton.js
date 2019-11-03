import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  box-sizing: border-box;
  width: 6rem;
  border-radius: 0 0.5rem 0.5rem 0;
  height: 4rem;
  transition: all 0.2s;
  font-size: 3rem;
  background-color: inherit;
  border: none;
  color: var(--color-mainLight);
  margin-left: -6rem;

  &:hover {
    transform: scale(1.2);
    color: var(--color-white);
    background-color: var(--color-mainLight);
    border: 1px solid var(--color-white);
  }

  &:active {
    transform: scale(1);
  }
`;

class AddButton extends Component {
  render() {
    return (
      <ButtonStyled type={this.props.type}>{this.props.children}</ButtonStyled>
    );
  }
}

export default AddButton;
