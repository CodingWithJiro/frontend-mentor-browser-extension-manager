const ToastRestore = ({ toast, handleView }) => {
  return (
    toast && (
      <div className="fixed bottom-6 left-6 flex gap-5 border-2 border-red-500 bg-white">
        <p>{toast.message}</p>

        <button type="button" onClick={handleView}>
          View
        </button>
      </div>
    )
  );
};

export default ToastRestore;
