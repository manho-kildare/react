
import type { ButtonProps } from "./Button";
import type { IconProps as CIconProps } from "../../components";
import { Button } from "./Button";
import {Icon as CIcon} from '../../components'

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string
  }


export const Icon = ({name, iconClassName, className, ...buttonProps}: IconProps) => {
  const btnClassName = ['btn-circle', className].join(" ");
  return (
    <Button {...buttonProps}>
      <CIcon name={name}  className={iconClassName} />
    </Button>
  )
}
