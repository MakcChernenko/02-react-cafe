// import css from './button.module.css';
// import clsx from 'clsx';
interface ButtonProps {
  name: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ name, onClick }: ButtonProps) => {
  return <button onClick={onClick}> {name} </button>;
};

export default Button;
