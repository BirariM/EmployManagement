import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {listEmployees, deleteEmployee} from './../Services/Employee';
import { Container } from 'react-bootstrap';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  };

  const removeEmployee = (employeeId) => {
    deleteEmployee(employeeId)
      .then((res) => getAllEmployees())
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <br />
      <br />
      <h2 className="text-center"> List Employees </h2>
      <button
        className="btn btn-primary mb-2"
        onClick={() => navigate('/add-employee')}>
        Add Employee
      </button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th> Employee Id </th>
            <th> Employee First Name </th>
            <th> Employee Last Name </th>
            <th> Employee Email Id </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({id, firstName, lastName, email}) => (
            <tr key={id}>
              <td> {id} </td>
              <td> {firstName} </td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>
                <button className="btn btn-info" onClick={() => navigate(`/edit-employee/${id}`)}>Update</button>
                <button className="btn btn-danger" onClick={() => removeEmployee(id)} style={{marginLeft: '10px'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default EmployeeList;
