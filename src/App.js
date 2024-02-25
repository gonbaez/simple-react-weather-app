import React, { Component } from "react";
import WeatherWeek from "./components/WeatherWeek";

// Can I use SCSS modules?
// import myFile from "./assets/location.png";
import styles from "./styles/App.module.css";

import { getLocation } from "./functions/location";

class App extends Component {
  state = {};

  // Why like this and not like:
  // async onLocationClick() { ... }

  onLocationClick = async () => {
    const loc = await getLocation();
    this.setState({ coords: loc.coords });
  };

  render() {
    return (
      <>
        <header>
          <h1>What is your weather?</h1>
        </header>

        <main>
          {!this.state.coords ? (
            <img
              onClick={this.onLocationClick}
              // src={require("./assets/location.png")} // Why require? Older syntax, like importing from the top
              src="./location.png"
              alt="location"
            />
          ) : (
            <WeatherWeek coords={this.state.coords} />
          )}
        </main>

        <footer>
          <p>&copy; Gonzalo Baez 2024</p>
        </footer>
      </>
    );
  }
}

export default App;
