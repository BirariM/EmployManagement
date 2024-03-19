import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { update, create, getById } from "./../Services/Employee";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

const Employee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    if (id) {
      update(id, employee)
        .then((res) => navigate("/employees"))
        .catch((err) => console.log(err));
    } else {
      create(employee)
        .then((res) => navigate("/employees"))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (id) {
      getById(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Card style={{ width: '30rem' }}>
            <h2 className="text-center">
              {id ? "Update Employee" : "Add Employee"}
            </h2>
            <Card.Body>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label> First Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label> Last Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label> Email Id :</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email Id"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Button variant="success" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Employee;
