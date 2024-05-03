import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from "axios";
import TurkeyMap from 'turkey-map-react';
export default function Homepage() {
     const [data,setData]=useState([]);
     const [cityTemp,setCityTemp]=useState([]);
  const getApi = async () => {

    const veri = await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=39.925018&lon=32.836956&appid=c41c9140689f44b0d348436fa3af84bb');
    console.log(veri);
    setData(veri.data);
  }

const handleCityClick =async  (city) => {
const cityData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city?.name}&appid=c41c9140689f44b0d348436fa3af84bb`)
setCityTemp(cityData.data)
}


  useEffect(() => {

  getApi();

  },[])
  console.log(data,"DATA")
  return (
    <div>

<TurkeyMap showTooltip={true} showSubTitle={true} showTitle={true} onClick={handleCityClick} />

{cityTemp?.city?.name} - {(cityTemp?.list?.length > 0 ?  cityTemp?.list[0]?.main?.temp-273 : null)}


    </div>
  )
}
