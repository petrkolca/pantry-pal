import { StyledButton } from "./styles/Button.styled";

const Button = (props) => {

  const onClickHandler = () => {

    if(!props.onClick) return
  
    props.onClick();
  };

  return (
    <StyledButton onClick={props.onClickFn} {...props}>
      {props.children}
    </StyledButton>
  );
}

export default Button;