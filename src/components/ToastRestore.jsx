const ToastRestore = ({ toast, handleView, handleUndo }) => {
  return (
    toast && (
      <div className="fixed bottom-6 left-6 flex gap-5 border-2 border-red-500 bg-white">
        <p>{toast.message}</p>

        <div>
          <button type="button" onClick={handleView}>
            View
          </button>

          <button type="button" onClick={() => handleUndo(toast.name)}>
            Undo
          </button>
        </div>
      </div>
    )
  );
};

export default ToastRestore;
