import './App.css';
import TopNavigator from './Components/TopNavigator';
import DataTable from './Components/DataTable';
import { useEffect, useState } from 'react';
import SaveData from './Components/SaveData';
import axios from 'axios';

function App() {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  // axios.defaults.headers.common['Origin'] = 'http://localhost:3000';
  const [data, setdata] = useState([]);

  const GetAll = async()=>{
    const resp = await axios.get('https://localhost:7249/api/Emp/GetAll');
    return resp.data;
  }

  useEffect(()=>{
    const retrieveData = async()=>{
      const allRecords = await GetAll();
      if(allRecords) setdata(allRecords);
    }
    retrieveData();
  },[])
  return (
    <>
    <TopNavigator/>
    <SaveData data={setdata}/>
    <DataTable data={data} re={setdata}/>
    </>
  );
}

export default App;
