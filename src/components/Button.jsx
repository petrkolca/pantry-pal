import { StyledButton } from "./styles/Button.styled";

const Button = ({onClickFn, children}) => {
  return (
    <StyledButton onClick={onClickFn}>
      {children}
    </StyledButton>
  );
}

export default Button;