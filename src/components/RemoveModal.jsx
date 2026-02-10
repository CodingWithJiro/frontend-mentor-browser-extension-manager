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
    <dialog
      ref={dialogRef}
      onClose={() => setToRemove(null)}
      className="m-auto max-w-72 rounded-2xl bg-(--COLOR-BG-CARD-PRIMARY) px-4.5 py-5 font-(family-name:--FF) shadow-(--SHADOW-CARD-SECONDARY) md:max-w-98"
    >
      <section className="flex flex-col items-center justify-center gap-1 md:items-start">
        <h2 className="mb-2 text-[1.25rem] leading-tight font-bold text-(--COLOR-TEXT-PRIMARY)">
          Remove Extension
        </h2>

        <p className="mb-2 text-center text-[0.935rem] leading-[1.45] font-normal text-(--COLOR-TEXT-SECONDARY) md:text-left">
          Are you sure you want to remove{" "}
          <span className="font-extrabold">{toRemove}</span> from your
          extensions?
        </p>

        <div className="flex justify-start gap-5 md:self-end">
          <button
            type="button"
            onClick={handleRemove}
            className="cursor-pointer rounded-full border-2 border-solid border-(--COLOR-BORDER-SECONDARY-DANGER) bg-(--COLOR-BUTTON-TERTIARY) px-4 py-1.75 text-[0.95rem] font-bold text-(--COLOR-TEXT-PRIMARY-DANGER) outline-transparent select-none hover:bg-(--COLOR-BUTTON-TERTIARY-HOVER) hover:text-(--COLOR-TEXT-PRIMARY-HOVER) focus-visible:bg-(--COLOR-BUTTON-TERTIARY-HOVER) focus-visible:text-(--COLOR-TEXT-PRIMARY-HOVER) focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
          >
            Remove
          </button>

          <button
            type="button"
            onClick={() => setToRemove(null)}
            className="cursor-pointer rounded-full border border-solid border-(--COLOR-BORDER-SECONDARY) bg-(--COLOR-BUTTON-TERTIARY) px-4 py-1.75 text-[0.95rem] font-medium text-(--COLOR-TEXT-PRIMARY) opacity-70 outline-transparent select-none hover:bg-(--COLOR-BUTTON-PRIMARY-HOVER) hover:opacity-100 focus-visible:border-(--COLOR-BORDER-SECONDARY-FOCUS) focus-visible:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-(--COLOR-OUTLINE-SECONDARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
          >
            Cancel
          </button>
        </div>
      </section>
    </dialog>
  );
};

export default RemoveModal;
