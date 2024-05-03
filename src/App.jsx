import axios from 'axios';
import {useEffect,useState} from 'react';
function App() {


  const [data,setData]=useState([]);
  const getApi = async () => {

    const veri = await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=39.925018&lon=32.836956&appid=c41c9140689f44b0d348436fa3af84bb');
    console.log(veri);
    setData(veri.data);
  }

  useEffect(() => {

  getApi();

  },[])

console.log(data,"DATA mı ?")
  return (
    <div>
      {/* {JSON.stringify(data, null, 2)} */}
      <span className="text-2xl font-bold text-green-500">{data?.city?.name}</span>
    </div>
  )
}

export default App
