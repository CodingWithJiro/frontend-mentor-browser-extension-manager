import logos from "../assets/logo.js";

const Extension = ({
  logo,
  name,
  description,
  isActive,
  toggleActive,
  setToRemove,
}) => {
  return (
    <section className="flex min-h-50 flex-col justify-between rounded-2xl bg-(--COLOR-BG-CARD-PRIMARY) px-4.5 py-5 font-(family-name:--FF) shadow-(--SHADOW-CARD-SECONDARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
      <div className="flex items-start justify-start gap-4.25">
        <img src={logos[logo]} alt="" width="60" height="60" />

        <div>
          <h3 className="mb-2 text-[1.25rem] leading-tight font-bold text-(--COLOR-TEXT-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
            {name}
          </h3>
          <p className="text-[0.935rem] leading-[1.45] font-normal text-(--COLOR-TEXT-SECONDARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="cursor-pointer rounded-full border border-solid border-(--COLOR-BORDER-SECONDARY) bg-(--COLOR-BUTTON-TERTIARY) px-4 py-1.75 text-[0.95rem] font-medium text-(--COLOR-TEXT-PRIMARY) outline-transparent select-none hover:bg-(--COLOR-BUTTON-TERTIARY-HOVER) hover:not-focus-visible:text-(--COLOR-TEXT-PRIMARY-HOVER) focus-visible:border-(--COLOR-BORDER-SECONDARY-FOCUS) focus-visible:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
          type="button"
          onClick={() => setToRemove(name)}
        >
          Remove
        </button>

        <button
          type="button"
          aria-label={`Toggle ${name} active status`}
          aria-pressed={isActive}
          className={`h-5 w-9 cursor-pointer rounded-full p-0.5 outline-transparent select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out ${isActive ? "bg-(--COLOR-BUTTON-SECONDARY-ACTIVE) hover:bg-(--COLOR-BUTTON-SECONDARY-HOVER)" : "bg-(--COLOR-BUTTON-SECONDARY)"}`}
          onClick={() => toggleActive(name)}
        >
          <div
            className={`h-full w-full max-w-4 rounded-full bg-(--COLOR-TOGGLE) shadow-(--SHADOW-CARD-SECONDARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out ${isActive ? "translate-x-full" : "translate-x-0"} motion-safe:transition-transform`}
          ></div>
        </button>
      </div>
    </section>
  );
};

export default Extension;
