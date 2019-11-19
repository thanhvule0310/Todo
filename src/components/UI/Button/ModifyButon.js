import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  margin-left: 1rem;
  padding: 1rem;
  transition: all 0.5s;
  color: var(--color-white);
  text-align: center;
  display: inline-block;
  background-color: ${({ color }) =>
    color === 'red' ? 'var(--color-errorRed)' : 'var(--color-main)'};
  &:hover {
    transform: rotate(360deg);
  }
`;

const ModifyButon = ({ children, color, onClick }) => {
  return (
    <Button onClick={onClick} color={color}>
      {children}
    </Button>
  );
};

export default ModifyButon;
