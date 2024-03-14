import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { update, create, getById } from "./../Services/Employee";

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
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">
              {id ? "Update Employee" : "Add Employee"}
            </h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  {" "}
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
