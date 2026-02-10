import { useRef, useEffect } from "react";

const RemoveModal = ({ toRemove, handleRemove, setToRemove }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef) return;

    if (toRemove !== null) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [toRemove]);

  return (
    <dialog ref={dialogRef} onClose={() => setToRemove(null)}>
      <section>
        <h2>Remove Extension</h2>

        <p>Are you sure you want to remove {toRemove} from your extensions?</p>

        <div>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>

          <button type="button" onClick={() => setToRemove(null)}>
            Cancel
          </button>
        </div>
      </section>
    </dialog>
  );
};

export default RemoveModal;
