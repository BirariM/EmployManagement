import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {listEmployees, deleteEmployee} from './../Services/Employee'
import {Button, ButtonGroup, Container, Table} from 'react-bootstrap'

export default function EmployeeList() {
  const [employees, setEmployees] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = () => {
    listEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err))
  }

  const removeEmployee = (employeeId) => {
    deleteEmployee(employeeId)
      .then((res) => getAllEmployees())
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <br />
      <br />
      <h2 className="text-center"> List Employees </h2>

      <Button
        variant="outline-info"
        className="mb-2"
        onClick={() => navigate('/add-employee')}>
        Add Employee
      </Button>

      <Table striped bordered hover>
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
        {/* <tr key="1">
              <td> 1 </td>
              <td> Suyash </td>
              <td> suvare</td>
              <td>sss.com</td>
              <td>

              <Button
                  variant="secondary"
                  className="me-2"
                  onClick={() => navigate(`/edit-employee/${1}`)}>
                  update
                </Button>

                <Button variant="danger"
                  onClick={() => removeEmployee(1)}>
                  Delete
                </Button>
                
              </td>
            </tr> */}
          {employees.map(({id, firstName, lastName, email}) => (
            <tr key={id}>
              <td> {id} </td>
              <td> {firstName} </td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>
              <ButtonGroup className="mb-2">

              <Button
                  variant="secondary"
                  onClick={() => navigate(`/edit-employee/${id}`)} style={{ml: '10px'}}>
                  update
                </Button>

                <Button variant="danger"
                  onClick={() => removeEmployee(id)}>
                  Delete
                </Button>
                
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}


