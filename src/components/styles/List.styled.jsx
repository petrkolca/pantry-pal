import styled from "styled-components";

export const StyledPantryList = styled.div`
  margin-top: 2rem;
  display: grid;
  row-gap: 1rem;
`

export const PantryItem = styled.article`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 1rem;
  align-items: center;

  &:hover {
    color: #6C757D;

    .title {
      color: #6C757D;
    }
  }

  p {
    margin-bottom: 0;
    /* color: #A1A5A1; */
    letter-spacing: 1px;
    transition: var(--transition);
  }

  .btn-ctn {
    display: flex;
    align-items: center;
  }
`