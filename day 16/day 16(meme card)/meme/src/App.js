import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="memeCard">
        <div className="cardImg">
          <img
            src="https://media.discordapp.net/attachments/817464077294239744/860567146325475368/img.png?width=738&height=458"
            alt="pic"
          ></img>
        </div>
        <h1>React card</h1>
        <div className="cardDescription">
          <p> Meme card THA</p>
        </div>
      </div>
    );
  }
}

export default App;
