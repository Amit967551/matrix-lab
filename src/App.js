import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 9 }}>
        {/* <Sidebar/> */}
        <MainPage />
      </div>
    </div>
  );
}

export default App;
