import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import WeatherState from "./Child/WeatherState";
import WeatherDay from "./Child/WeatherDay";
import "./Weather.scss";
import moment from "moment";
const WeatherByLocation = (props) => {
  let { woeid } = useParams(); //lay bien woeid tu url
  const [locationWeather, setLocationWeather] = useState();
  useEffect(() => {
    getWeatherByLocation();
  }, []);
  let history = useHistory();
  const handleBack = () => {
    history.push("/weather");
  };
  const getWeatherByLocation = async () => {
    if(!woeid){
      woeid = props.woeidFromParent;
    }
    let response = await axios({
      method: "post",
      url: "http://localhost:3330/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/${woeid}/`,
      },
    });
    if (response && response.data) {
      setLocationWeather(response.data);
    }
  };
  return (
    <div>
      <div className="w-b-l-container">
        { !props.woeidFromParent&&
          <div className="back" onClick={() => handleBack()}>
          --- Back ---
        </div>}
        <div className="list-weather-day">
          {!_.isEmpty(locationWeather) &&
            locationWeather.consolidated_weather &&
            locationWeather.consolidated_weather.length > 0 &&
            locationWeather.consolidated_weather.map((item, index) => {
              return (
                <div key={`weatherDay-${index}`} className={`weather-day-${index}`}>
                  {index===0&&
                  <div className="location-data">
                    <div className="title">{locationWeather.title}</div> 
                    <div className="time">{moment(locationWeather.time).format("hh:mm:ss A")}</div>  
                  </div>}
                  <WeatherDay 
                  dataWeather={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default WeatherByLocation;
