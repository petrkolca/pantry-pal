import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.25;
    font-weight: 400;

    color-scheme: light dark;
    color: #f8fafc;
    background-color: #1E2A3B;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    // global variables
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.5rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
  }

  /*
  =============== 
  Global Styles
  ===============
  */

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    line-height: 1.5;
    font-size: 0.875rem;
  }

  a {
    font-weight: 500;
    color: #31D3EE;
    text-decoration: inherit;

    &:hover {
      color: #1fafc9;
    }
    
  }

  ul {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.45rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }

  p {
    margin-bottom: 1.25rem;
    color: #1e2a3b;
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.25rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  /* section */
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 35rem;
    margin-top: 8rem;
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    padding: 2rem;

    &:hover {
      box-shadow: var(--dark-shadow);
    }

    > div {
      margin-top: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2;
    margin-bottom: 1.2em;
  } 

  .form-control {
    display: flex;
    justify-content: center;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #1E2A3B;
      background-color: #fffaed;
    }
    a {
      color:  #FFAC81;

      &:hover {
        color:  #fc7f40;
      }
    }
  }
`
