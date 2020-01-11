import React from 'react';
import styled from 'styled-components';

import Backdrop from './Backdrop/Backdrop';

const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened
      ? 'translate(-50%, -50%) scale(1)'
      : 'translate(-50%, -50%) scale(0)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  width: 100%;
  max-width: 50rem;
  box-shadow: var(--shadow);
  border-radius: 0.5rem;
  background-color: var(--color-main);
  transition: all 0.2s;
`;

const InsideWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
`;

const Modal = ({ opened, close, children }) => {
  return (
    <>
      <Backdrop close={close} opened={opened} />
      <WrappedModal opened={opened}>
        <InsideWrapper>{children}</InsideWrapper>
      </WrappedModal>
    </>
  );
};
export default Modal;