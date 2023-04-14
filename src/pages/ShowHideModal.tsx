import { useCallback } from 'react';
import * as D from '../data';
import { useToggle } from '../hooks';

export default function ShowHideModal() {

  const [open, toggleOpen] = useToggle(false);
  const onAccept = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  

  return <div>ShowHideModal</div>;
}
