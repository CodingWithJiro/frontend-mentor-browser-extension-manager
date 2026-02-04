import imageUrl from "../assets/logo-devlens_60x60.svg";

const Extension = () => {
  return (
    <section>
      <div>
        <img src={imageUrl} alt="" width="60" height="60" />

        <div>
          <h3>DevLens</h3>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </div>

      <div>
        <button type="button">Remove</button>
        <button
          type="button"
          aria-label="Toggle extension to active/inactive"
        ></button>
      </div>
    </section>
  );
};

export default Extension;
