import styled from "styled-components";

export const StyledSelect = styled.select`
  border: 1px solid #DEE2E6;
  background: #F8F9FA;
  font-size: 1rem;
  color: #6c6d6e;
  padding: 0.5rem 0.75rem;
  width: auto;
  border-radius: var(--radius);

  &::placeholder {
    color: #bec1c4;
  }

  option[hidden] {
    color: #bec1c4;
  }
`