import { useEffect, useRef } from "react";

const RestoreModal = ({ showRestore, setShowRestore }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (showRestore) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [showRestore]);

  return (
    <dialog ref={dialogRef} onClose={() => setShowRestore(false)}>
      <h2>Recently Removed</h2>
      <p>a list of removed extensions</p>
      <button type="button" onClick={() => setShowRestore(false)}>
        Close
      </button>
    </dialog>
  );
};

export default RestoreModal;
