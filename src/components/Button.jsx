import { StyledButton } from "./styles/Button.styled";

const Button = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

export default Button;