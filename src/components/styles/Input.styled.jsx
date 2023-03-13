import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 0;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  width: 100%;
  padding: .75rem .85rem;
  background: #F8F9FA;
  border: 1px solid #DEE2E6;

  &::placeholder {
    color: #bec1c4;
  }
`