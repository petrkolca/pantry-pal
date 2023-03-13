import styled, { css } from "styled-components"

export const StyledButton = styled.button`
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: var(--transition);

  ${props => props.linkBtn ? 
    css`
      text-transform: capitalize;
      width: auto;
      height: 1.5rem;
      display: grid;
      align-items: center;
      gap: 2em;
      background: transparent;
      border: 0;
      border-bottom: 1px solid transparent;
      color: #C43B31;
      margin: 0 auto;
      margin-top: 1.25rem;
      font-size: 0.85rem;
      letter-spacing: 1px;

      &:hover {
        color: #A8322A;
      }
      &:focus,
      &:focus-visible {
        outline: 2px auto -webkit-focus-ring-color;
      }
    `
  : 
    css`
      border-radius: 8px;
      border: none;
      padding: 0.6em 1.2em;
      background-color: #31D3EE;
      color: #1E2A3B;

      &:hover {
        background-color: #36c2e2;
      }
      &:focus,
      &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
    `
  }

  @media (prefers-color-scheme: light) {
    ${props => props.linkBtn ? 
      css`
        color: #D2544B;

        &:hover {
          color: #A8322A;
          border-bottom: 1px solid currentColor;
        }
      `
    : 
      css`
        background-color: #FBC231;
        color: #1E2A3B;
      `
    }
  }

`