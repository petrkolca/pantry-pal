import { StyledButton } from "./styles/Button.styled";

const Button = (props) => {

  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  );
}

export default Button;