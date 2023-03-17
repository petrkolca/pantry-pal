
import { StyledSelect } from "./styles/Selectbox.styled";

const Selectbox = ({ value, onChangeFn, children, ...restProps }) => {
  return (
      <StyledSelect 
        {...restProps}
        value={value}
        onChange={onChangeFn}
        >
        {children}
      </StyledSelect>
  );
}

export default Selectbox;