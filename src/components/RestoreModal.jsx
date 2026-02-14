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
  const getShortDescription = (description) => {
    return description.slice(0, 37) + "...";
  };

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
      className="hide-scrollbar m-auto max-h-100 max-w-72 rounded-2xl bg-(--COLOR-BG-CARD-PRIMARY) px-4.5 py-5 font-(family-name:--FF) shadow-(--SHADOW-CARD-SECONDARY) md:max-w-98"
    >
      <h2
        id="restore-modal-heading"
        className="mb-5 text-center text-[1.25rem] leading-tight font-bold text-(--COLOR-TEXT-PRIMARY)"
      >
        Recently Removed
      </h2>

      {isEmpty && <p>All extensions restored.</p>}

      <ul className="mb-2.5 flex flex-col gap-2">
        {[...removedExtensions].reverse().map(({ logo, name, description }) => {
          return (
            <li key={name} className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center justify-start gap-2">
                  <img src={logos[logo]} alt="" width="55" height="55" />
                  <div>
                    <p className="text-[0.9rem]/[1.25] font-medium text-(--COLOR-TEXT-PRIMARY)">
                      {name}
                    </p>
                    <p className="text-[0.70rem] text-(--COLOR-TEXT-SECONDARY)">
                      {getShortDescription(description)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRestore(name)}
                  aria-label={`Restore ${name}`}
                  className="bg-(-COLOR-BUTTON-PRIMARY) cursor-pointer rounded-full border border-solid border-(--COLOR-BORDER-SECONDARY) px-2.25 py-1 text-sm text-(--COLOR-TEXT-SECONDARY) select-none hover:border-(--COLOR-BORDER-TERTIARY) hover:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) hover:text-(--COLOR-TEXT-PRIMARY) focus-visible:border-(--COLOR-BORDER-SECONDARY-FOCUS) focus-visible:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) focus-visible:text-(--COLOR-TEXT-PRIMARY) focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
                >
                  Restore
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setShowRestore(false)}
        className="w-full cursor-pointer rounded-full border border-solid border-(--COLOR-BORDER-SECONDARY) bg-(--COLOR-BUTTON-TERTIARY) px-2.25 py-1 text-[0.95rem] font-medium text-(--COLOR-TEXT-PRIMARY) outline-transparent select-none hover:border-(--COLOR-BORDER-TERTIARY) hover:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) focus-visible:border-(--COLOR-BORDER-SECONDARY-FOCUS) focus-visible:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
      >
        Close
      </button>
    </dialog>
  );
};

export default RestoreModal;
