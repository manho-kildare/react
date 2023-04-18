import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = ReactInputProps & {};

export const Input = ({className: _className, ...inputProps}: InputProps) => {
  const className = ['input', _className].join(' ');

  return <input {...inputProps} className={className} />;
};

// 사용자 지정 컴포넌트에서는 ref를 사용하려면 아래와 같이 사용해야되는 거 같은데 잘 안된다..
// export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
//   const {className: _className, ...inputProps} = props;
//   const className = ['input', _className].join(' ');

// return <input ref={ref} {...inputProps} className={className} />;
// });



