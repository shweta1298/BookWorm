import Button from "react-bootstrap/Button";
import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Modal, ModalBody } from "reactstrap";
import "./Nav.css";
import { useFormik } from "formik";
import { LoginUpSchema } from "./Validation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "./bookwormLogo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import { Password, PropaneSharp } from "@mui/icons-material";
//import {routes,route} from 'react-router-dom'
//import { NavLink } from "react-bootstrap";
//import { appBarclassNamees } from "@mui/material";

const initialValues = {
  Email_ID: "",
  Password: "",
};
//const cors = require('cors');

function Newnav() {
  const [modal, setmodal] = useState(false);
  const loginref = useRef();
  // const[login, setlogin]=useState(initialValues);
  const toggle = () => {
    setmodal(!modal);
  };

  useEffect(() => {
    if (localStorage.getItem("CustomerId") !== null) {
      loginref.current.textContent = "Logout";
    } else if (localStorage.getItem("CustomerId") === null) {
      loginref.current.textContent = "Login";
    }
  });

  return (
    <div>
      <Navbar style={{ backgroundColor: "#fff6ff" }} expand="lg">
        <Container fluid>
          <img src={logo} alt="images not found" width="130" height="30" />
          <div
            style={{ paddingBottom: "4px" }}
            className="justify-content-Right nav ms-1 topnav"
          >
            <a className="nav-link blcolor" href="#fffv">
              <b>Home</b>
            </a>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <b>
                <NavDropdown
                  title="Product"
                  id="navbarScrollingDropdown"
                  className="ms-2 btncolor1"
                >
                  <NavDropdown.Item href="#action3">
                    Audio Book
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">E Book</NavDropdown.Item>
                </NavDropdown>
              </b>
            </Nav>
          </Navbar.Collapse>
          <div className="nav topnav d-flex justify-content-center">
            <Form className="navbar-nav mr-auto ml-auto flex-md-{grow|shrink}-1">
              <Form.Control
                type="search"
                placeholder="   Search   "
                style={{ width: "300px", height: "80%", borderRadius: "20px" }}
                className="position-relative me-2 p-1 mt-1"
                aria-label="Search"
                //form-control-lg
              />
              <Button
                style={{ height: "80%", width: "60px" }}
                className="SearchButton m-1"
              >
                <SearchIcon />
              </Button>
            </Form>
          </div>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <div className="nav topnav">
                {/* ------------------------------------------------------------------------------------------------- */}
                <LoginPopUp modal={modal} toggle={toggle} />
                {/* ------------------------------------------------------------------------------------------------- */}
              </div>
              <div className="ms-3 nav topnav">
                <a className="nav-link blcolor" href="#action1">
                  <ShoppingCartIcon />
                </a>
              </div>
              <div className="ms-3 nav topnav">
                <a className="nav-link blcolor" href="#fffv">
                  <b>MyShelf</b>
                </a>
              </div>
              <div className="ms-3 nav topnav">
                <a
                  className="nav-link blcolor"
                  href="#bd"
                  onClick={() => {
                    if (loginref.current.textContent === "Logout") {
                      localStorage.clear();
                      loginref.current.textContent = "Login";
                    } else if (loginref.current.textContent === "Login") {
                      setmodal(true);
                    }
                  }}
                >
                  <b ref={loginref}>Login</b>
                </a>
              </div>
              <div className="ms-3 nav topnav">
                <a className="nav-link blcolor" href="#action1">
                  <b>Register</b>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
          {/* </nav> */}
        </Container>
      </Navbar>
    </div>
  );
}

function LoginPopUp(props) {
  const [message, setmessage] = useState("");
  //const [login, setlogin] = useState(initialValues);
  //React.useEffect(() => {});

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,

      validationSchema: LoginUpSchema,

      onSubmit: (values, action) => {
        console.log(values);

        // setlogin({
        //   Email_ID:values.Email_ID,
        //   Password:values.Password,
        // });

        console.log(values.Email_ID + "," + values.Password);
        // localStorage.clear();

        fetch("https://localhost:44320/api/Login", {
          method: "POST",

          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result !== -1) {
              props.toggle();
              localStorage.setItem("CustomerId", result);
              console.log(localStorage.getItem("CustomerId"));

              setmessage("");
            } else if (result == -1) {
              setmessage("Invalid Username or Password");
            }
            // localStorage.setItem("token", JSON.stringify(login));
          });

        action.resetForm();
      },
    });

  return (
    <Modal size="md" isOpen={props.modal} animation="false">
      <div className="modal-header txtcntr">
        <h5 className="Login" id="exampleModalLabel">
          Login
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={props.toggle}
        ></button>
      </div>
      <div>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">
                <h6>Email Address</h6>
              </label>
              <input
                type="email"
                autoComplete="off"
                name="Email_ID"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={values.Email_ID}
                aria-describedby="emailHelp"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Email_ID && touched.Email_ID ? (
                <p className="form-error errorcolor">{errors.Email_ID}</p>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <h6>Password</h6>
              </label>
              <input
                type="password"
                autoComplete="off"
                name="Password"
                className="form-control"
                id="password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              />
              {errors.Password && touched.Password ? (
                <p className="form-error errorcolor">{errors.Password}</p>
              ) : null}
            </div>
            <span style={{ color: "red" }}>{message}</span>
            <div>
              <button
                type="submit"
                color="primary"
                className="btn btn-primary input-button button cnt mt-3"
              >
                Login
              </button>
            </div>
          </form>

          <br></br>
          <p>
            Dont have Account?
            <span>
              <a href="#sv">Register here</a>
            </span>
          </p>
          {/* <Button color="primary" onClick={toggle}><a href="//www.google.com/"></a></Button> */}
        </ModalBody>
      </div>
    </Modal>
  );
}

export default Newnav;

// {/* <Button color="primary" onClick={toggle}><a href="//www.google.com/"></a></Button> */}
