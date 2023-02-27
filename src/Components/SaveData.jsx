import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

function SaveData(props) {
    const [Name, setName] = useState('');
    const [Dept, setDept] = useState('');
    function handleName(event) {
        setName(event.target.value);
        console.log(event.target.name);
    }
    function handleDept(event) {
        setDept(event.target.value);
        console.log(event.target.name);
    }
    const SaveApi = async (name, dept) => {
      try {
        const data = { EmpName: name, DeptNo: dept };
        const resp = await axios.post('https://localhost:7249/api/Emp/Insert', data);
        console.log(resp.data);
        props.setdata();
        return resp.data;
      } catch (ex) {
        console.log(ex);
        return null;
      }
    }
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emp Name</Form.Label>
        <Form.Control type="taxt" placeholder="Emp Name" onChange={handleName}
        name='empname' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Department No.</Form.Label>
        <Form.Control type="text" placeholder="Dept No." onChange={handleDept}
        name='deptno' />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>{SaveApi(Name, Dept)}}>
        Submit
      </Button>
    </Form>
  );
}

export default SaveData;