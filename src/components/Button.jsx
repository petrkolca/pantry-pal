import { StyledButton } from "./styles/Button.styled";

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClickFn} {...props}>
      {props.children}
    </StyledButton>
  );
}

export default Button;