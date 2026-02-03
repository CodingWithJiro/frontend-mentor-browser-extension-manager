import SkipLink from "./components/SkipLink";
import MainLayout from "./components/MainLayout";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <SkipLink />
      <MainLayout>
        <Header />
        <Main />
      </MainLayout>
    </>
  );
}

export default App;
