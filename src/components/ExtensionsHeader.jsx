import ExtensionsFilter from "./ExtensionsFilter";

const ExtensionsHeader = ({ filter, setFilter }) => {
  return (
    <header>
      <h2>Extensions List</h2>
      <ExtensionsFilter filter={filter} setFilter={setFilter} />
    </header>
  );
};

export default ExtensionsHeader;
