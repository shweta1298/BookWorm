import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
//import styled from './Registration/Registration.module.css';
//import ResponsiveDatePickers from './Registration/ResponsiveDatePickers';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customer from './Registration/Registration.js';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Customer />
      </div>
    );
  }
}
export default App;