import logos from "../assets/logo.js";

const Extension = ({ logo, name, description }) => {
  return (
    <section className="flex min-h-50 flex-col justify-between rounded-2xl bg-(--COLOR-BG-CARD-PRIMARY) px-4.5 py-5 font-(family-name:--FF) shadow-(--SHADOW-CARD-SECONDARY)">
      <div className="flex items-start justify-start gap-4.25">
        <img src={logos[logo]} alt="" width="60" height="60" />

        <div>
          <h3 className="mb-2 text-[1.25rem] leading-tight font-bold text-(--COLOR-TEXT-PRIMARY)">
            {name}
          </h3>
          <p className="text-[0.935rem] leading-[1.45] font-normal text-(--COLOR-TEXT-SECONDARY)">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="cursor-pointer rounded-full border border-solid border-(--COLOR-BORDER-SECONDARY) px-4 py-1.75 text-[0.95rem] font-medium select-none"
          type="button"
        >
          Remove
        </button>

        <button
          type="button"
          aria-label="Toggle extension to active/inactive"
          className="h-5 w-9 cursor-pointer rounded-full bg-(--COLOR-BUTTON-SECONDARY) p-0.5 select-none"
        >
          <div className="h-full w-full max-w-4 rounded-full bg-neutral-50 shadow-(--SHADOW-CARD-SECONDARY)"></div>
        </button>
      </div>
    </section>
  );
};

export default Extension;
