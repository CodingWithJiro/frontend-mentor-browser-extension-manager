import { useEffect, useRef } from "react";
import logos from "../assets/logo.js";

const RestoreModal = ({
  showRestore,
  setShowRestore,
  removedExtensions,
  handleRestore,
}) => {
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

      <ul>
        {[...removedExtensions].reverse().map(({ logo, name, description }) => {
          return (
            <li key={name}>
              <img src={logos[logo]} alt="" width="60" height="60" />
              <p>{name}</p>
              <p>{description}</p>
              <button type="button" onClick={() => handleRestore(name)}>
                Restore
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => setShowRestore(false)}>
        Close
      </button>
    </dialog>
  );
};

export default RestoreModal;
