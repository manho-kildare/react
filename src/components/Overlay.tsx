import React, { FC } from "react";
import { Div, ReactDivProps } from "./Div";

export type OverlayProps = ReactDivProps & {
  opacityClass?: string
}

export const Overlay: FC<OverlayProps> = ({
  className: _className, opacityClass, children,
  ...props
}) => {
  
  const className = [
    _className,
    'absolute z-50 w-screen h-screen',
    opacityClass ?? 'bg-back/70',
    'flex items-center justify-center'
  ].join(" ");

  return (
    <Div {...props} className={className} top="0" left="0">
      {children}
    </Div>
  );
}