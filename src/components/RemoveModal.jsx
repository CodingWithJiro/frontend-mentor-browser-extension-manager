const RemoveModal = ({ name }) => {
  return (
    <dialog>
      <section>
        <h2>Remove Extension</h2>

        <p>Remove {name} from your extension list?</p>

        <div></div>

        <button type="button">Confirm</button>

        <button type="button">Cancel</button>
      </section>
    </dialog>
  );
};

export default RemoveModal;
