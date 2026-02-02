import SkipLink from "./components/SkipLink";
import Theme from "./components/Theme";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <>
      <SkipLink />
      <MainLayout>
        <Theme />
      </MainLayout>
    </>
  );
}

export default App;
