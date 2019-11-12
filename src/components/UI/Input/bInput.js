import React, { Component } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  border: none;
  min-width: ${props => (props.size === "small" ? "50%" : "100%")};
  min-height: 4rem;
  display: inline-block;
  background-color: var(--color-textBox);
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-weight: 300;
  font-size: 1.6rem;
  color: var(--color-text-lighter);
  transition: all 0.2s;

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.6rem;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export default class bInput extends Component {
  render() {
    const { name, type, size, placeholder, _handleChange } = this.props;
    return (
      <InputStyled
        name={name}
        placeholder={placeholder}
        size={size}
        type={type}
        onChange={_handleChange}
      />
    );
  }
}
