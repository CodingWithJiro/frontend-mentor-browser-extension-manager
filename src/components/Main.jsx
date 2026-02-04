import { useState } from "react";
import ExtensionsHeader from "./ExtensionsHeader";
import ExtensionsGrid from "./ExtensionsGrid";
import LIST from "../data/extensions.json";

const Main = () => {
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(LIST);

  const filterExtensions = (value) => {
    const filteredExtensions = LIST.filter((extension) => {
      const { isActive } = extension;

      switch (value) {
        case "active":
          return isActive;
        case "inactive":
          return !isActive;
        default:
          return true;
      }
    });
    setExtensions(filteredExtensions);
  };

  return (
    <main id="main">
      <ExtensionsHeader
        filter={filter}
        setFilter={setFilter}
        filterExtensions={filterExtensions}
      />
      <ExtensionsGrid filter={filter} extensions={extensions} />
    </main>
  );
};

export default Main;
