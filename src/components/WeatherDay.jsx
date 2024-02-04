import React, { Component } from "react";

import styles from "../styles/WeatherDay.module.css";

class WeatherDay extends Component {
  state = {};
  render() {
    const { max, min, icon, description, date } = this.props;

    return (
      <>
        <div className={styles.dayCont}>
          <h3>{date}</h3>
          <div className={styles.icon}>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="icon"
            />
          </div>
          <div className={styles.temperatures}>
            <div>
              <p>Max</p>
              <p className="high">{Math.round(max - 273.15)}&deg;</p>
            </div>
            <div>
              <p>Min</p>
              <p className="low">{Math.round(min - 273.15)}&deg;</p>
            </div>
          </div>
          <div className="description">
            <p>
              {description.substring(0, 1).toUpperCase() +
                description.substring(1)}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default WeatherDay;
