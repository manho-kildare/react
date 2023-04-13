import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = ReactButtonProps & {};

export const Button = ({
  className: _className,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
  const className = ['btn', _className].join(" ");
  return <button {...buttonProps} className={className} />
}