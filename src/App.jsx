import Footer from "./Footer";
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
      <Footer />
    </>
  );
}

export default App;
