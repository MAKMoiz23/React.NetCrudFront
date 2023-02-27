import axios from 'axios';
import React, { useState } from 'react'
import {Modal, Button, Form} from 'react-bootstrap';

export default function Update(props) {
    const preId = props.data.empId;
    const preName = props.data.empName;
    const predept = props.data.deptNo;

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
    const UpdateApi = async (id, name, dept) => {
      try {
        const data = { EmpId: id, EmpName: name, DeptNo: dept };
        const resp = await axios.post('https://localhost:7249/api/Emp/Update', data);
        console.log(resp.data);
        return resp.data;
      } catch (ex) {
        console.log(ex);
        return null;
      }
    }
  return (
    <Modal show={props.show} onHide={props.close}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Employee</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emp Name</Form.Label>
        <Form.Control type="text" placeholder="Emp Name" onChange={handleName} value={Name}
        name='empname' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Department No.</Form.Label>
        <Form.Control type="text" placeholder="Dept No." onChange={handleDept} value={Dept}
        name='deptno' />
      </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.close}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{ UpdateApi(preId, Name, Dept); props.close() }}>
        Save
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
