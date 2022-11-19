export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
// determinando o tipo do disable como booleano para o codigo reconhecer