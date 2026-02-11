const ToastUndo = () => {
  return (
    <div className="fixed bottom-6 left-6 flex gap-5 border-2 border-red-500 bg-white">
      <p>Extension removed</p>

      <button type="button">Undo</button>
    </div>
  );
};

export default ToastUndo;
