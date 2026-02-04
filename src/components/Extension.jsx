const Extension = ({ logo, name, description }) => {
  return (
    <section>
      <div>
        <img src={logo} alt="" width="60" height="60" />

        <div>
          <h3>{name}</h3>
          <p>{description}.</p>
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
