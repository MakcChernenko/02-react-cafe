import css from "./button.module.css";
import clsx from "clsx";
interface ButtonProps {
  name: number;
  className?: "activ" | "notActiv";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ name, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(css.button, className && css[className])}
    >
      {name}
    </button>
  );
};
export default Button;
