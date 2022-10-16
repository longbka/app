import WeatherState from "./WeatherState";
import "./Child.scss";
import moment from "moment";
const WeatherDay = (props) => {
// const dataWeather = {
//     "id": 5065103830417408,
//     "weather_state_name": "Heavy Cloud",
//     "weather_state_abbr": "hc",
//     "wind_direction_compass": "ESE",
//     "created": "2022-04-20T01:46:33.036172Z",
//     "applicable_date": "2022-04-20",
//     "min_temp": 18.715,
//     "max_temp": 27.84,
//     "the_temp": 25.45,
//     "wind_speed": 4.172452578467086,
//     "wind_direction": 104.26112226859077,
//     "air_pressure": 1016.0,
//     "humidity": 70,
//     "visibility": 10.856908156366817,
//     "predictability": 71
// }
const dataWeather = props.dataWeather;
  return (
  <div className="weather-day-container">
    <div className="date">
        {moment(dataWeather.applicable_date).format("ddd DD-MMM-YY")}
    </div>
    <div className="state">
        <WeatherState
            weatherState = {dataWeather.weather_state_name}
        />
    </div>
    <div className="max-temp">
      Max: {Math.round(dataWeather.max_temp)}°C
    </div>
    <div className="min-temp">
      Min: {Math.round(dataWeather.min_temp)}°C 
    </div>
    <div className="wind">
    <span className={`dir dir-${dataWeather.wind_direction_compass.toLowerCase()}`}></span>
      {Math.round(dataWeather.wind_speed)}mph
    </div>
  </div>
  );
};
export default WeatherDay;
