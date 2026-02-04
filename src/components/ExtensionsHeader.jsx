import ExtensionsFilter from "./ExtensionsFilter";

const ExtensionsHeader = ({ filter, setFilter }) => {
  return (
    <header className="flex flex-col items-center gap-4">
      <h2 className="text-[2.15rem] font-bold text-(--COLOR-TEXT-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
        Extensions List
      </h2>
      <ExtensionsFilter filter={filter} setFilter={setFilter} />
    </header>
  );
};

export default ExtensionsHeader;
