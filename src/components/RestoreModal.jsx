import { useEffect, useRef } from "react";
import logos from "../assets/logo.js";

const RestoreModal = ({
  showRestore,
  setShowRestore,
  removedExtensions,
  handleRestore,
}) => {
  const dialogRef = useRef(null);
  const isEmpty = removedExtensions.length === 0;

  useEffect(() => {
    if (!dialogRef.current) return;

    if (showRestore) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [showRestore]);

  return (
    <dialog
      ref={dialogRef}
      onClose={() => setShowRestore(false)}
      aria-labelledby="restore-modal-heading"
    >
      <h2 id="restore-modal-heading">Recently Removed</h2>

      {isEmpty && <p>All extensions restored.</p>}

      <ul>
        {[...removedExtensions].reverse().map(({ logo, name, description }) => {
          return (
            <li key={name}>
              <img src={logos[logo]} alt="" width="60" height="60" />
              <p>{name}</p>
              <p>{description}</p>
              <button
                type="button"
                onClick={() => handleRestore(name)}
                aria-label={`Restore ${name}`}
              >
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
