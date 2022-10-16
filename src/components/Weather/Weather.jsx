import React, { useState, useEffect } from "react";
import "./Weather.scss";
import Search from "./Search";
import axios from "axios";
import _ from "lodash";
import WeatherByLocation from "./WeatherByLocation"; 
const Weather = () => {
  const [title, setTitle] = useState("");
  useEffect(async () => {
    let response = await axios({
      method: "post",
      url: "http://localhost:3330/get-data-by-url",
      data: { url: "https://www.metaweather.com/api/location/1236594/" },
    });
    setTitle(response.data.title);
  }, []);
  return (
    <div className="weather-app-container">
      <Search />
      <hr/>
      <WeatherByLocation
        woeidFromParent = {"1236594"}
      />
      <hr/>
      <WeatherByLocation
        woeidFromParent = {"1252431"}
      />
    </div>
  );
};
// class Weather extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       title: "",
//     }
//   }
//   async componentDidMount() {
//     // let data = await axios.get(
//     //   "https://www.metaweather.com/api/location/1236594/"
//     // );
//     // console.log(">>>check data: ", data);
//     let response = await axios({
//       method: 'post',
//       url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
//       data: { url: "https://www.metaweather.com/api/location/1236594/" },
//     });
//     this.setState({
//       title: response.data.title,
//     });
//     console.log("data: ", response)
//   }
//   render() {
//     return <div>Weather App title = {this.state.title}</div>;
//   }
// }
export default Weather;
