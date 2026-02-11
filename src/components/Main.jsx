import { useEffect, useState } from "react";
import ExtensionsHeader from "./ExtensionsHeader";
import ExtensionsGrid from "./ExtensionsGrid";
import LIST from "../data/extensions.json";
import RemoveModal from "./RemoveModal";
import ToastRestore from "./ToastRestore";
import RestoreModal from "./RestoreModal";

const Main = () => {
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(LIST);
  const [removedExtensions, setRemovedExtensions] = useState([]);
  const [toRemove, setToRemove] = useState(null);
  const [toast, setToast] = useState(null);
  const [showRestore, setShowRestore] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const toastTimer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(toastTimer);
  }, [toast]);

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
    setRemovedExtensions((prev) => [...prev, removedExtension]);
  };
  const removeExtension = (targetName) => {
    const extensionsNew = extensions.filter((extension) => {
      const { name } = extension;
      const isTarget = name === targetName;

      return !isTarget;
    });

    setExtensions(extensionsNew);
  };
  const handleRemove = () => {
    saveRemovedExtension(toRemove);
    removeExtension(toRemove);
    setToast({
      message: `${toRemove} removed`,
    });
    setToRemove(null);
  };
  const handleView = () => {
    setToast(null);
    setShowRestore(true);
  };

  const filteredExtensions = getFilteredExtensions();

  return (
    <main id="main">
      <ExtensionsHeader filter={filter} setFilter={setFilter} />
      <ExtensionsGrid
        toggleActive={toggleActive}
        extensions={filteredExtensions}
        setToRemove={setToRemove}
      />
      <RemoveModal
        handleRemove={handleRemove}
        toRemove={toRemove}
        setToRemove={setToRemove}
      />
      <ToastRestore toast={toast} handleView={handleView} />
      <RestoreModal
        showRestore={showRestore}
        setShowRestore={setShowRestore}
        removedExtensions={removedExtensions}
      />
    </main>
  );
};

export default Main;
