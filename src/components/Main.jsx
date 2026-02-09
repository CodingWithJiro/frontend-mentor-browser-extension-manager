import { useState } from "react";
import ExtensionsHeader from "./ExtensionsHeader";
import ExtensionsGrid from "./ExtensionsGrid";
import LIST from "../data/extensions.json";
import RemoveModal from "./RemoveModal";

const Main = () => {
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(LIST);
  const [removedExtensions, setRemovedExtensions] = useState([]);

  const getFilteredExtensions = () => {
    switch (filter) {
      case "active":
        return extensions.filter(({ isActive }) => isActive);
      case "inactive":
        return extensions.filter(({ isActive }) => !isActive);
      default:
        return extensions;
    }
  };
  const toggleActive = (targetName) => {
    const extensionsNew = extensions.map((extension) => {
      const { name, isActive } = extension;
      const isTarget = name === targetName;

      return isTarget ? { ...extension, isActive: !isActive } : extension;
    });

    setExtensions(extensionsNew);
  };
  const saveRemovedExtension = (targetName) => {
    const removedExtension = extensions.find(({ name }) => targetName === name);
    const removedExtensionsNew = [...removedExtensions, removedExtension];

    setRemovedExtensions(removedExtensionsNew);
  };
  const removeExtension = (targetName) => {
    const extensionsNew = extensions.filter((extension) => {
      const { name } = extension;
      const isTarget = name === targetName;

      return !isTarget;
    });

    setExtensions(extensionsNew);
  };
  const handleRemove = (targetName) => {
    saveRemovedExtension(targetName);
    removeExtension(targetName);
  };

  const filteredExtensions = getFilteredExtensions();

  return (
    <main id="main">
      <ExtensionsHeader filter={filter} setFilter={setFilter} />
      <ExtensionsGrid
        toggleActive={toggleActive}
        extensions={filteredExtensions}
        handleRemove={handleRemove}
      />
      <RemoveModal />
    </main>
  );
};

export default Main;
