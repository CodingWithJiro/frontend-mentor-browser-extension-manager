import CompanyTitle from "./CompanyTitle";
import Theme from "./Theme";

const Header = () => {
  return (
    <header className="flex items-center justify-between border border-red-700 bg-(--COLOR-BG-CARD-PRIMARY) px-2.75 py-2">
      <CompanyTitle />
      <Theme />
    </header>
  );
};

export default Header;
