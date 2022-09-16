import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
import * as yup from 'yup';
import 'yup-phone';
import styled from './Registration.module.css';
//import ResponsiveDatePickers from './Registration/ResponsiveDatePickers';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const initialValues = {
    First_Name: '',
    Last_Name: '',
    Phone_Number: '',
    DOB: '',
    Email_ID: '',
    Address_line1: '',
    Address_line2: '',
    City: '',
    Country: '',
    Password: ''
};


function Customer() {
    const ref = useRef(null);
    const [formData, setFormData] = useState(initialValues);

    const [message, setMessage] = useState("");

    const handleChange2 = (e) => {
       
        fetch('https://localhost:44385//api/Usernames', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.target.value)
            }).then(res=>res.json()).then((result) => {
                //console.warn("result", result);
                console.log(result);
                if(result==true){
                        setMessage("User already existed");
                }else{
                    setMessage("");
                }
               
            })

        //console.log(e.target.value);
    }

    useEffect(() => {
        const element = ref.current;
        element.addEventListener('change', handleChange2);
    });

   

   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = 
    useFormik({
        initialValues,
        onSubmit: (values, action,) => {
            console.log(values);
            
            setFormData( values/* {
                First_Name: values.First_Name,
                Last_Name: values.Last_Name,
                Phone_Number: values.Phone_Number,
                DOB: values.DOB, 
                Email_ID: values.Email_ID,
                Address_line1: values.Address_line1,
                Address_line2: values.Address_line2,
                City: values.City,
                Country: values.Country,
                Password: values.Password
            } */)
    
            fetch('https://localhost:44357/api/Registrations', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then((result) => {
                console.warn("result", result);
               
            })


            action.resetForm(); 
        },

        validationSchema: yup.object({
            First_Name: yup.string()
                .min(3, 'name should be more than 3 characters')
                .max(20, 'name should not be more than 20 characters')
                .required('Please Enter Name'),

            Last_Name: yup.string()
                .min(3, 'Last name should be more than 3 characters')
                .max(20, 'Last name should not be more than 20 characters')
                .required('Please Enter Last Name'),

            Phone_Number: yup.string()
                .phone(null, true, "Invalid phone number"),

            DOB: yup.date()
                .required('Required'),

            Email_ID: yup.string()
                .email('Invalid email address')
                .required('Please Enter Email Id'),

            Address_line1: yup.string()
                .min(3, 'Address Line 1 should be more than 3 characters')
                .max(50, 'Address Line 1 should not be more than 20 characters')
                .required('Please Enter Address Line 1'),

            Address_line2: yup.string()
                .min(3, 'Last name should be more than 3 characters')
                .max(50, 'Last name should not be more than 50 characters')
                .required('Please Enter Address Line 2'),

            City: yup.string()
                .min(1, 'Last name should be more than 1 characters')
                .max(20, 'Last name should not be more than 20 characters')
                .required('Please Enter City '),

            Country: yup.string()
                .min(2, 'Last name should be more than 2 characters')
                .max(20, 'Last name should not be more than 20 characters')
                .required('Please Enter Country '),

            Password: yup.string()
                .min(8, "Pssword must be more than 8 characters")
                .required("Password is required"),

            confirmPassword: yup.string()
                .required('Password is required')
                .oneOf([yup.ref('Password')], 'Password must be match'),

        }),

        // onSubmit: values => {
        //     alert(
        //         'Registration Form Submitted \n ' + JSON.stringify(values)
        //     );
        // }
        // ---------------------------------------------------------------------

    });

    return (

        <div className="container col-sm-6 mt-3 mb-3" >
            <div className="row  mt border border-secondary=">
                <div className="col-sm-4 bg-danger ">
                    <h2 className="mt-3 text-light">Get Started</h2>
                    <p className="ms-2 mt-3 text-light">SignUp for free to get access of world of e-Books and Audio Books.</p>
                </div>


                <div className="col-sm-6 m-3">
                    <h2>Register</h2>
                    <p>Enter your Details</p>

                    <form onSubmit={handleSubmit}>

                        <div className="form">

                            <label htmlFor="First_Name"> First Name </label>
                            <input type="text" className="form-control" id="First_Name" name="First_Name" placeholder="Enter First_Name" onChange={handleChange} onBlur={handleBlur}
                                value={values.First_Name}></input>
                        </div>
                        <p>  {touched.First_Name && errors.First_Name ?
                            <span style={{ color: 'red' }} >{errors.First_Name}</span> : null}</p>

                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="Last_Name"> Last Name </label>
                            <input type="text" className="form-control" id="Last_Name" name="Last_Name"  placeholder="Enter Last Name"  onChange={handleChange} onBlur={handleBlur}
                                value={values.Last_Name}></input>
                        </div>
                        <p>  {touched.Last_Name && errors.Last_Name ?
                            <span style={{ color: 'red' }} >{errors.Last_Name}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="Phone_Number"> Phone Number </label>
                            <input type="text" className="form-control" id="Phone_Number" name="Phone_Number" placeholder="Enter Phone Number" onChange={handleChange} onBlur={handleBlur}
                                value={values.Phone_Number}></input>
                        </div>
                        <p>  {touched.Phone_Number && errors.Phone_Number ?
                            <span style={{ color: 'red' }} >{errors.Phone_Number}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="DOB"> Date of Birth </label>
                            <input type="date" className="form-control" id="DOB" name="DOB" placeholder="Enter Date of Birth" onChange={handleChange} onBlur={handleBlur}
                                value={values.DOB}></input>
                        </div>
                        <p>  {touched.DOB && errors.DOB ?
                            <span style={{ color: 'red' }} >{errors.DOB}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="Email_ID"> Email Id </label>
                            <input type="text" ref={ref} className="form-control" id="Email_ID" name="Email_ID" placeholder="Enter Email Id" onChange={handleChange} onBlur={handleBlur}
                                value={values.Email_ID}></input>
                        </div>
                        <span style={{ color: 'red' }} >{message}</span>
                        <p>  {touched.Email_ID && errors.Email_ID ?
                            <span style={{ color: 'red' }} >{errors.Email_ID}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="Address_line1"> Address Line 1 </label>
                            <input type="text" className="form-control" id="Address_line1" name="Address_line1" placeholder="Enter Address Line 1" onChange={handleChange} onBlur={handleBlur}
                                value={values.Address_line1}></input>
                        </div>
                        <p>  {touched.Address_line1 && errors.Address_line1 ?
                            <span style={{ color: 'red' }} >{errors.Address_line1}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="Address_line2"> Address Line 2 </label>
                            <input type="text" className="form-control" id="Address_line2" name="Address_line2" placeholder="Enter Address Line 2" onChange={handleChange} onBlur={handleBlur}
                                value={values.Address_line2}></input>
                        </div>
                        <p>  {touched.Address_line2 && errors.Address_line2 ?
                            <span style={{ color: 'red' }} >{errors.Address_line2}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="City">City</label>
                            <input type="text" className="form-control" id="City" placeholder="Enter City" name="City" onChange={handleChange} onBlur={handleBlur}
                                value={values.City}></input>
                        </div>
                        <p>  {touched.City && errors.City ?
                            <span style={{ color: 'red' }} >{errors.City}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="Country ">Country</label>
                            <input type="text" className="form-control" id="Country" placeholder="Enter Country" name="Country" onChange={handleChange} onBlur={handleBlur}
                                value={values.Country}></input>
                        </div>
                        <p>  {touched.Country && errors.Country ?
                            <span style={{ color: 'red' }} >{errors.Country}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="Password"> Password </label>
                            <input type="Password" className="form-control" id="Password" name="Password" placeholder="Enter Password" onChange={handleChange} onBlur={handleBlur}
                                value={values.Password}></input>
                        </div>
                        <p>  {touched.Password && errors.Password ?
                            <span style={{ color: 'red' }} >{errors.Password}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Enter Confirm Password" onChange={handleChange} onBlur={handleBlur}
                                value={values.confirmPassword}></input>
                        </div>
                        <p>  {touched.confirmPassword && errors.confirmPassword ?
                            <span style={{ color: 'red' }} >{errors.confirmPassword}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        {/* <button type="submit"> Sign up</button> */}
                        <input class="btn btn-primary" className={styled.btncolor} type="submit" value="Submit"></input>


                        {/* <input class="btn btn-primary" className={styled.btncolor} type="reset" onClick={resetForm} value="reset"></input> */}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Customer;


  //style={{ display: 'flex', justifyContent: "center" }

  //{...getFieldProps("First_Name")}

  
    //     fetch('https://api.covid19api.com/summary')
    //     .then((apidata)=>{
    //         return apidata.json();
    //     })
    // .then((actualdata)=>{
    //     console.log(actualdata.Countries[101].Country);
    // })
    // .catch((error)=>{ 
    //     console.log(error);
    // });



    // // -----------------------------------------------------------------------------
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const dataToSubmit = {
    //         First_Name,
    //         Last_Name,
    //         Phone_Number,
    //         DOB,
    //         Email_ID,
    //         Address_line1,
    //         Address_line2,
    //         City,
    //         Country,
    //         Password,
    //         confirmPassword,
    //     }
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //         body: JSON.stringify(dataToSubmit)
    //     }).then(res => res.json())
    //         .then(res => {
    //             alert('submit')
    //             // console.log(res)
    //         })
    // }

