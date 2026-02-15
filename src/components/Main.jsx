import ExtensionsHeader from "./ExtensionsHeader";
import ExtensionsGrid from "./ExtensionsGrid";
import RemoveModal from "./RemoveModal";
import ToastRestore from "./ToastRestore";
import RestoreModal from "./RestoreModal";
import useMain from "../hooks/useMain";

const Main = () => {
  const {
    filter,
    setFilter,
    toRemove,
    setToRemove,
    toast,
    setToast,
    showRestore,
    setShowRestore,
    removedExtensions,
    filteredExtensions,
    emptyMessage,
    toggleActive,
    handleRemove,
    handleView,
    handleRestore,
    handleRestoreAll,
    handleUndo,
  } = useMain();

  return (
    <main id="main">
      <ExtensionsHeader filter={filter} setFilter={setFilter} />
      <ExtensionsGrid
        toggleActive={toggleActive}
        extensions={filteredExtensions}
        setToRemove={setToRemove}
        emptyMessage={emptyMessage}
        filter={filter}
        handleView={handleView}
      />
      <RemoveModal
        handleRemove={handleRemove}
        toRemove={toRemove}
        setToRemove={setToRemove}
      />
      <ToastRestore
        toast={toast}
        setToast={setToast}
        handleView={handleView}
        handleUndo={handleUndo}
      />
      <RestoreModal
        showRestore={showRestore}
        setShowRestore={setShowRestore}
        removedExtensions={removedExtensions}
        handleRestore={handleRestore}
        handleRestoreAll={handleRestoreAll}
      />
    </main>
  );
};

export default Main;
