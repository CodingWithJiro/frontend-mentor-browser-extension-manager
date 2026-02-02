import SkipLink from "./components/SkipLink";
import MainLayout from "./components/MainLayout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <SkipLink />
      <MainLayout>
        <Header />
      </MainLayout>
    </>
  );
}

export default App;
