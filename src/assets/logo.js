const logoModules = import.meta.glob("./logo-*_60x60.svg", {
  eager: true,
  import: "default",
});

const logoArray = Object.entries(logoModules);
const logoArraySimplified = logoArray.map(([key, src]) => {
  const keySimplified = key.replace("./logo-", "").replace("_60x60.svg", "");
  return [keySimplified, src];
});
const logos = Object.fromEntries(logoArraySimplified);

export default logos;
