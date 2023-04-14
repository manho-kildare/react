import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = ReactInputProps & {};

export const Input = ({className: _className, ...inputProps}: InputProps) => {
  const className = ['input', _className].join(' ');

  return <input {...inputProps} className={className} />;
};

