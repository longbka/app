import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom";
const Search = () => {
  const [keyword, setKeyword] = useState(""); //gia tri nhap vao o tim kiem
  const [locationArr, setLocationArr] = useState("");
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isFocusInput, setIsFocusInput] = useState(false);
  let history = useHistory(); //dung de thay doi url
  const handleViewDetail = (woeid) => {
    history.push(`weather/detail/${woeid}`); //them weather/detail/${woeid} vao url
  };
  const handleSearchBtn = async () => {
    setIsLoadingData(true);
    let response = await axios({
      method: "post",
      url: "http://localhost:3330/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/search/?query=${keyword}`,
      },
    });
    if (response && response.data) {
      let result = response.data;
      let _locationArr = [];
      if (!_.isEmpty(result)) {
        for (let key in result) {
          _locationArr.push(result[key]); //đẩy location vào mảng
        }
        setLocationArr(_locationArr);
      } else {
        setLocationArr([]);
      }
    }
    setIsLoadingData(false);
    setIsFocusInput(false); // khi bam nut search set focus bang false
  };
  return (
    <div className="search-weather-container">
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Search any city ... "
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          onFocus={() => setIsFocusInput(true)} // khi dang go set focus = true
        ></input>
        <button onClick={() => handleSearchBtn()}>Search</button>
      </div>
      <div>{isLoadingData === true && <div>Loading data ....</div>}</div>
      <div className="result-container">
        {locationArr &&
          locationArr.length > 0 &&
          locationArr.map((item, index) => {
            return (
              <div className="result-child" key={`location-${index}`}>
                <div className="title">Title: {item.title}</div>
                <div className="type">Type: {item.location_type}</div>
                <div className="woeid">
                  <span onClick={() => handleViewDetail(item.woeid)} title="Click to view detail" >
                    <b>Woeid: {item.woeid}</b>
                  </span>
                </div>
                <div className="latt_long">Latt_long: {item.latt_long}</div>
              </div>
            );
          })}
        {!isFocusInput &&
          keyword &&
          locationArr &&
          locationArr.length === 0 && (
            <div>Not found data with keyword = {keyword}</div>
          )}
      </div>
    </div>
  );
};
export default Search;
