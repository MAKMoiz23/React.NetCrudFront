import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Update from './Update';
import { useState } from 'react';

function DataTable(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [modalData, setmodalData] = useState(false);

  const GetById = async (id) => {
    try {
      const resp = await axios.get(`https://localhost:7249/api/Emp/GetById?id=${id}`);
      console.log(resp.data);
      setmodalData(resp.data);
      return resp.data;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }
  const data = Array.from(props.data);
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>EmpId</th>
          <th>EmpName</th>
          <th>DeptNo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index)=>{
          return(<tr key={index}>
          <td>{item.empId}</td>
          <td>{item.empName}</td>
          <td>{item.deptNo}</td>
          <td><Button variant="primary" onClick={async()=>{await GetById(item.empId); setShowLogin(true)}}>Edit</Button></td>
        </tr>
          )
        })}
      </tbody>
    </Table>
    <Update show={showLogin} close={() => setShowLogin(false)} data={modalData} />
    </>
  );
}

export default DataTable;