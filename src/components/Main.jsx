import { useState } from "react";
import ExtensionsHeader from "./ExtensionsHeader";
import ExtensionsGrid from "./ExtensionsGrid";

const Main = () => {
  const [filter, setFilter] = useState("all");

  return (
    <main id="main">
      <ExtensionsHeader filter={filter} setFilter={setFilter} />
      <ExtensionsGrid />
    </main>
  );
};

export default Main;
