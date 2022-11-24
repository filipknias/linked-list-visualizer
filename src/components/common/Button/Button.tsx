import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children , ...buttonProps }: Props) {
  return (
    <button {...buttonProps} className={classes.button}>{children}</button>
  )
}