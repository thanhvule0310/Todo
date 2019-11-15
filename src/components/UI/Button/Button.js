import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 50%;
  border-radius: 0.5rem;
  height: 4rem;
  transition: all 0.2s;
  font-size: 1.2rem;
  font-weight: 200;
  border: none;
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) =>
    color === 'white' ? 'var(--color-mainLight)' : 'var(--color-white)'};
  background-color: ${({ color }) =>
    color === 'white' ? 'var(--color-white)' : 'var(--color-mainLight)'};
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #777777;
  }
`;

const Button = ({ children, disabled, loading, ...rest }) => {
  return (
    <ButtonStyled disabled={disabled} {...rest}>
      {loading ? loading : children}
    </ButtonStyled>
  );
};

export default Button;
