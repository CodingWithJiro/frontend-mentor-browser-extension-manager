import CompanyTitle from "./CompanyTitle";
import Theme from "./Theme";

const Header = () => {
  return (
    <header className="mb-8 flex items-center justify-between rounded-lg bg-(--COLOR-BG-CARD-PRIMARY) px-2.75 py-2 shadow-(--SHADOW-CARD-PRIMARY) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out md:rounded-2xl md:px-3.5 md:py-3">
      <CompanyTitle />
      <Theme />
    </header>
  );
};

export default Header;
