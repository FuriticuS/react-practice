import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";

export default function ModalRoot({children, open}) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById("modal")
  )
}