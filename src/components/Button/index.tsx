import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled}>{title}</ButtonContainer>;
};
//adicionado o disabled em Button


export default Button;
