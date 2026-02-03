const ExtensionsFilter = ({ filter, setFilter }) => {
  const FILTERS = ["all", "active", "inactive"];

  return (
    <fieldset>
      <legend className="sr-only">Filter extensions</legend>

      {FILTERS.map((value) => {
        const capitalizedValue = value[0].toUpperCase() + value.slice(1);
        return (
          <label key={value}>
            <input
              type="radio"
              name="status"
              value={value}
              onChange={() => setFilter(value)}
              checked={filter === value}
            />
            {capitalizedValue}
          </label>
        );
      })}
    </fieldset>
  );
};

export default ExtensionsFilter;
