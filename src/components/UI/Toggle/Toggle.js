import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

const CheckBoxLabel = styled.label`
  outline: 0;
  display: block;
  width: 4rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #777777;
  border-radius: 25px;
  padding: 2px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  &::after {
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    left: 0;
    border-radius: 25px;
    background: #fbfbfb;
    transition: all 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  border-radius: 25px;
  width: 4rem;
  height: 2rem;
  &:checked + ${CheckBoxLabel} {
    background: #86d993;
    &::after {
      left: 50%;
    }
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Toggle = ({ isDark, toggleDarkMode }) => {
  return (
    <Wrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={isDark}
        onChange={() => toggleDarkMode()}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </Wrapper>
  );
};

const mapStateToProps = ({ darkMode }) => ({
  isDark: darkMode.isDark
});

const mapDispatchToProps = {
  toggleDarkMode: actions.toogleDarkMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
