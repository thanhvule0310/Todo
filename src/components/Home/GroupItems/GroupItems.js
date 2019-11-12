import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-rows: min-content min-content;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 2rem;
  box-sizing: border-box;

  @media ${props => props.theme.mediaQueries.medium} {
    grid-gap: 2rem;
    grid-template-rows: repeat(4, min-content);
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const Li = styled.li`
  list-style: none;
  display: inline-block;
  width: 100%;
  height: auto;
`;

const NavLinkStyled = styled(NavLink)`
  background-color: var(--color-white);
  padding: 2rem;
  display: inline-block;
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1.5rem 4rem var(--shadow);
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-0.5rem);
  }

  &:active {
    transform: translateY(-0.2rem);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    &:hover {
      transform: none;
    }
    &:active {
      transform: none;
    }
  }
`;

const H1 = styled.h1`
  color: var(--color-text-lighter) !important;
  font-size: 2rem;
  text-transform: uppercase;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Badge = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 900;
  background-color: var(--color-badge);
  text-align: center;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const activeStyled = {
  border: "2px solid var(--color-green)"
};

export default class Menu extends Component {
  render() {
    const { all, importance, finished, unFinish } = this.props.count;
    return (
      <div>
        <Ul>
          <Li>
            <NavLinkStyled exact to="/home/all" activeStyle={activeStyled}>
              <Head>
                <H1>All task</H1>
                <Badge>{all}</Badge>
              </Head>
            </NavLinkStyled>
          </Li>
          <Li>
            <NavLinkStyled
              exact
              to="/home/importance"
              activeStyle={activeStyled}
            >
              <Head>
                <H1>Importance</H1>
                <Badge>{importance}</Badge>
              </Head>
            </NavLinkStyled>
          </Li>
          <Li>
            <NavLinkStyled exact to="/home/finished" activeStyle={activeStyled}>
              <Head>
                <H1>Finished</H1>
                <Badge>{finished}</Badge>
              </Head>
            </NavLinkStyled>
          </Li>
          <Li>
            <NavLinkStyled
              exact
              to="/home/unfinished"
              activeStyle={activeStyled}
            >
              <Head>
                <H1>Unfinished</H1>
                <Badge>{unFinish}</Badge>
              </Head>
            </NavLinkStyled>
          </Li>
        </Ul>
      </div>
    );
  }
}
