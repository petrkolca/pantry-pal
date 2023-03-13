
import { StyledInput } from "./styles/Input.styled";

const Input = ({ value, onChangeFn, ...restProps }) => {
  return (
      <StyledInput 
        {...restProps}
        value={value}
        onChange={onChangeFn}
      />
  );
}

export default Input;