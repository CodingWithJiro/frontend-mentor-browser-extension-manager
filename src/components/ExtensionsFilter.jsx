const ExtensionsFilter = ({ filter, setFilter }) => {
  const FILTERS = ["all", "active", "inactive"];

  return (
    <ul className="flex gap-3.75">
      {FILTERS.map((value) => {
        const capitalizedValue = value[0].toUpperCase() + value.slice(1);
        return (
          <li key={value}>
            <button
              type="button"
              onClick={() => setFilter(value)}
              className={`cursor-pointer rounded-full px-[1em] py-[0.425em] font-(family-name:--FF) text-[1.2rem] font-normal outline-transparent select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out ${filter === value ? "bg-(--COLOR-BG-CARD-SECONDARY-ACTIVE) text-(--COLOR-TEXT-PRIMARY-ACTIVE) hover:bg-(--COLOR-BG-CARD-SECONDARY-ACTIVE-EMPHASIS) focus-visible:bg-(--COLOR-BG-CARD-SECONDARY-ACTIVE-EMPHASIS) " : "border-(--BORDER-CARD-PRIMARY) bg-(--COLOR-BG-CARD-SECONDARY) text-(--COLOR-TEXT-PRIMARY) shadow-(--SHADOW-CARD-SECONDARY) hover:bg-(--COLOR-BG-CARD-SECONDARY-HOVER) focus-visible:bg-(--COLOR-BG-CARD-SECONDARY-HOVER)"}`}
            >
              {capitalizedValue}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ExtensionsFilter;
