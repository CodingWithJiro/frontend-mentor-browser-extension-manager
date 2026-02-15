import Extension from "./Extension";

const ExtensionsGrid = ({
  extensions,
  toggleActive,
  setToRemove,
  emptyMessage,
  filter,
  handleView,
}) => {
  const isEmpty = extensions.length === 0;
  const showViewButton = isEmpty && filter === "all";

  return isEmpty ? (
    <section
      key={emptyMessage}
      className="fade-in mt-10 flex flex-col items-center justify-center gap-3"
    >
      <div className="flex items-center justify-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
          className="text-(--COLOR-TEXT-SECONDARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
        >
          <path d="M818-28 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800v114L26-820l57-57L875-85l-57 57ZM160-240h446L206-640h-46v400Zm711 37-71-71v-366H434L274-800h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5Z" />
        </svg>

        <p
          className="text-center font-normal text-(--COLOR-TEXT-SECONDARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
          role="status"
          aria-live="polite"
        >
          {emptyMessage}
        </p>
      </div>

      {showViewButton && (
        <button
          type="button"
          onClick={handleView}
          className="bg-(-COLOR-BUTTON-PRIMARY) cursor-pointer rounded-full border border-solid border-(--COLOR-BORDER-SECONDARY) px-3 py-1 text-sm text-(--COLOR-TEXT-SECONDARY) select-none hover:border-(--COLOR-BORDER-TERTIARY) hover:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) hover:text-(--COLOR-TEXT-PRIMARY) focus-visible:border-(--COLOR-BORDER-SECONDARY-FOCUS) focus-visible:bg-(--COLOR-BUTTON-TERTIARY-FOCUS) focus-visible:text-(--COLOR-TEXT-PRIMARY) focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
        >
          View removed
        </button>
      )}
    </section>
  ) : (
    <section
      aria-labelledby="extensions-title"
      className="mx-auto grid max-w-95 grid-cols-1 gap-y-3 md:max-w-3xl md:grid-cols-2 md:gap-x-3 lg:max-w-full lg:grid-cols-3"
    >
      {extensions.map(({ logo, name, description, isActive }) => {
        return (
          <Extension
            key={name}
            logo={logo}
            name={name}
            description={description}
            isActive={isActive}
            toggleActive={toggleActive}
            setToRemove={setToRemove}
          />
        );
      })}
    </section>
  );
};

export default ExtensionsGrid;
