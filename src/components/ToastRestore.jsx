const ToastRestore = ({ toast, setToast, handleView, handleUndo }) => {
  return (
    toast && (
      <div
        className="fade-in-fade-out fixed bottom-6 left-[50%] flex max-w-120 min-w-70 translate-x-[-50%] flex-col items-center gap-1 rounded-full border-t border-(--COLOR-BORDER-TERTIARY) bg-(--COLOR-BG-CARD-PRIMARY) px-6 py-2.5 font-(family-name:--FF) text-sm shadow-(--SHADOW-CARD-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out md:left-6 md:translate-x-0 md:flex-row md:gap-7"
        onAnimationEnd={() => setToast(null)}
        key={toast.name}
      >
        <p className="text-(--COLOR-TEXT-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
          {toast.message}
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleView}
            className="text-light cursor-pointer text-(--COLOR-TEXT-SECONDARY) underline-offset-2 select-none hover:text-(--COLOR-TEXT-PRIMARY) hover:underline focus-visible:text-(--COLOR-TEXT-PRIMARY) focus-visible:underline focus-visible:outline-none motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
          >
            View
          </button>

          <button
            type="button"
            onClick={() => handleUndo(toast.name)}
            className="cursor-pointer font-semibold text-(--COLOR-TEXT-PRIMARY) underline-offset-2 select-none hover:underline focus-visible:underline focus-visible:outline-none motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
          >
            Undo
          </button>
        </div>
      </div>
    )
  );
};

export default ToastRestore;
