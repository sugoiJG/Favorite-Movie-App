import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/Page_content/PageContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <PageContent />
        <Footer />
      </header>
    </div>
  );
}

export default App;
