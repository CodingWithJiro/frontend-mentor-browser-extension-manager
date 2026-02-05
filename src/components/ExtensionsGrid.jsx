import Extension from "./Extension";

const ExtensionsGrid = ({ extensions, toggleActive }) => {
  return (
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
          />
        );
      })}
    </section>
  );
};

export default ExtensionsGrid;
