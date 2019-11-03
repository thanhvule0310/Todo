import React, { Component } from 'react';
import styled from 'styled-components';

const ItemStyled = styled.div`
  width: 100%;
  height: 5rem;
  display: inline-block;
  background-color: var(--color-textBox);
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--color-text);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    filter: brightness(90%);
  }

  img {
    width: 3rem;
    cursor: pointer;
    padding: 0.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  padding-left: 2rem;
  cursor: pointer;
`;

export default class ListItem extends Component {
  render() {
    const { children, isFinish, isImportance } = this.props;
    return (
      <ItemStyled>
        {isFinish ? (
          <Container>
            <img src="/task_finished.svg" alt="Importance"></img>
            <Span
              style={{
                textDecoration: 'line-through',
                color: 'var(--color-text-lighter)'
              }}
            >
              {children}
            </Span>
          </Container>
        ) : (
          <Container>
            <img src="/task_unfinished.svg" alt="Importance"></img>
            <Span>{children}</Span>
          </Container>
        )}
        {isImportance ? (
          <img src="/star_checked.svg" alt="Importance checked"></img>
        ) : (
          <img src="/star_uncheck.svg" alt="Importance uncheck"></img>
        )}
      </ItemStyled>
    );
  }
}
