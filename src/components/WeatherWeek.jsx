import React, { Component } from "react";
import WeatherDay from "./WeatherDay";

import styles from "../styles/WeatherWeek.module.css";

import { getWeatherByCoordinates } from "../functions/weather.js";

class WeatherWeek extends Component {
  state = {};

  async componentDidMount() {
    const coords = this.props.coords;
    const data = await getWeatherByCoordinates(
      coords.latitude,
      coords.longitude
    );

    console.log(data);
    this.setState({ data });
  }

  render() {
    if (!this.state.data) {
      return (
        <div class={styles["lds-ellipsis"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    return (
      <>
        <h2>{this.state.data.name}</h2>
        <div className={styles.weekContent}>
          {/* Why like this and not just "weekContent"? */}
          {this.state.data.forecast.map((item) => {
            return <WeatherDay {...item} />;
          })}
        </div>
      </>
    );
  }
}

export default WeatherWeek;
