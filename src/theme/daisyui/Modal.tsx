import { Div, ReactDivProps } from "../../components";
import { Icon } from "./Icon";

export type ModalProps = ReactDivProps & {
  open?: boolean
}

export const Modal = ({open, className: _className, ...props}: ModalProps) => {
  const className = ['modal', open ? 'modal-open': '', _className].join(' ');
  return <div {...props} className={className} />
}

export type ModalContentProps = ReactDivProps & {
  onCloseIconClicked?: ()=> void
  closeIconClassName?: string
}

export const ModalContent = ({
  onCloseIconClicked,
  closeIconClassName: _closeIconClassName,
  className: _className,
  children,
  ...props
}: ModalContentProps) => {

  const showCloseIcon = onCloseIconClicked ? true : false;
  const className = ['modal-box', showCloseIcon && 'relative', _className].join(' ');
  // closeClicked 이벤트가 없으면 
  if (!showCloseIcon) return <div {...props} className={className} children={children} />;

  const closeIconClassName = _closeIconClassName ?? 'btn-primary btn-outline btn-sm';

  // closeClicked 이벤트가 있으면 클로즈 버튼도 추가로 그린다.
  return (
    <div {...props} className={className}>
      <Div className="absolute" right="0.5rem" top="0.5rem">
        <Icon name="close" className={closeIconClassName} onClick={onCloseIconClicked} />
      </Div>
      {children}
    </div>
  )
}

export type ModalActionProps = ReactDivProps & {};
export const ModalAction = ({
  className: _className, ...props
}: ModalActionProps) => {
  const className = ['modal-action',_className].join(" ");

  return <div {...props} className={className} />;
}