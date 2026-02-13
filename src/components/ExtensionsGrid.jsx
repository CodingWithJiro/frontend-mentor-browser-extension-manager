import Extension from "./Extension";

const ExtensionsGrid = ({
  extensions,
  toggleActive,
  setToRemove,
  emptyMessage,
}) => {
  const isEmpty = extensions.length === 0;
  return isEmpty ? (
    <section
      key={emptyMessage}
      className="fade-in mt-10 flex items-center justify-center gap-2.5"
    >
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
