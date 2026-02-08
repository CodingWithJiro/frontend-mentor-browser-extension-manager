const RemoveModal = ({ name }) => {
  return (
    <dialog>
      <form method="dialog">
        <button type="submit">X</button>
      </form>

      <section>
        <h2>Remove Extension</h2>

        <p>Remove {name} from your extension list?</p>

        <ul>
          <li>
            <button type="button">Confirm</button>
          </li>

          <li>
            <button type="button">Cancel</button>
          </li>
        </ul>
      </section>
    </dialog>
  );
};

export default RemoveModal;
