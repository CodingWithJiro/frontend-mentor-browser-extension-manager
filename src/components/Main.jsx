import { useState } from "react";
import ExtensionsHeader from "./ExtensionsHeader";

const Main = () => {
  const [filter, setFilter] = useState("all");

  return (
    <main id="main">
      <ExtensionsHeader filter={filter} setFilter={setFilter} />
    </main>
  );
};

export default Main;
