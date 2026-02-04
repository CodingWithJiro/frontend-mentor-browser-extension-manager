import Extension from "./Extension";

const ExtensionsGrid = () => {
  return (
    <section
      aria-labelledby="extensions-title"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Extension />
    </section>
  );
};

export default ExtensionsGrid;
