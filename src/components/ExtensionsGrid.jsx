import Extension from "./Extension";

const ExtensionsGrid = ({ extensions }) => {
  return (
    <section
      aria-labelledby="extensions-title"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {extensions.map(({ logo, name, description }) => {
        return (
          <Extension
            key={name}
            logo={logo}
            name={name}
            description={description}
          />
        );
      })}
    </section>
  );
};

export default ExtensionsGrid;
