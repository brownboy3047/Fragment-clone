import { BrowserRouter, Link } from "react-router-dom";

//style
import "./App.css";

//Components
import Header from "./components/Header";
import Search from "./components/Search";
import Auction from "./components/Auction";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <div className="app-text">
          <h1>Buy and Sell Usernames</h1>
          <p>
            <b>Secure your name</b> with blockchain in an ecosystem of
            <b> 700+ million</b> users and assign it as a <br /> link for your
            personal account, channel or group.
            <Link to="#">Learn more</Link>
          </p>
        </div>

        <Search />

        <Auction />

        <Modal />
      </BrowserRouter>
    </div>
  );
}

export default App;
