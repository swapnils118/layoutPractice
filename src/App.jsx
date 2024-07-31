import Header from "./Header";
import MainArea from "./MainArea";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <MainArea />
      </main>
    </>
  );
}

export default App;
