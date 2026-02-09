import { useRef, useEffect } from "react";

const RemoveModal = ({ toRemove, handleRemove, setToRemove }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (toRemove !== null) {
      inputRef.current.showModal();
      inputRef.current.addEventListener("close", () => setToRemove(null), {
        once: true,
      });
    } else {
      inputRef.current.close();
    }
  }, [toRemove]);
  useEffect(() => {});

  return (
    <dialog ref={inputRef}>
      <section>
        <h2>Remove Extension</h2>

        <p>Remove {toRemove} from your extension list?</p>

        <div>
          <button type="button" onClick={handleRemove}>
            Confirm
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
