
// TRYING NEW TYPE
import React, { useState } from 'react'
import "./register.css"
import axios from "axios"
import { useHistory } from 'react-router-dom'
import { Formik, Form, useFormik, FormikControl, ErrorMessage, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Route } from 'react-router';

function Registration() {

    const notify = () => {
        toast.success("Welcome to the family !!!!")

    }
    const history = useHistory()

    const [initialValues, setUser] = useState({

        FirstName: '',
        LastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const validationSchema = Yup.object({
        FirstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required("FirstName is required"),
        // .toast("First Name is Required!!!"),
        LastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('LastName is required'),
        username: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('username is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required')
    }).defined()


    const register = async (registerData) => {
        console.log("axios axios", registerData);
        const headers = {
            'Content-Type': 'application/json'
        }
        // if (FirstName && LastName && username && email && password && (password === confirmPassword)) {
        await axios.post("http://localhost:4000/app/signup", registerData, { headers })
            .then(res => {
                console.log("worked")
                toast.success("Welcome to the family")
                // alert(res.data.message)
                history.push("/login")

            })
            // if (!expectedError) {
            //     logService.log(error);
            //     toast("An unexpected error occurred");
            //    }

            //    return Promise.reject(error);
            //   });
            // }
            .catch((err) => {
                // console.log("fnnn", FirstName);
                alert("user already exists")

            })
    }



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                let registerData = JSON.stringify(values)
                register(registerData)
            }} >
            <div className="reg_from">
                <h1>Registeration Form</h1>
                <Form >
                    <div className="register">
                        <label htmlFor="FirstName">FirstName</label>
                        <Field type="text" name="FirstName" className="Form-control" id="FirstName" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="FirstName">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>

                        {/* <div className="register"> */}
                        <label htmlFor="LastName">LastName</label>
                        <Field type="text" name="LastName" className="Form-control" id="LastName" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="LastName">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        {/* </div> */}
                        {/* <div className="register"> */}
                        <label htmlFor="username">username</label>
                        <Field type="text" name="username" className="Form-control" id="username" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="username">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        {/* </div> */}
                        {/* <div className="register"> */}
                        <label htmlFor="email">email</label>
                        <Field type="text" name="email" className="Form-control" id="email" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="email">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        {/* </div> */}
                        {/* <div className="register"> */}
                        <label htmlFor="password">password</label>
                        <Field type="password" name="password" className="Form-control" id="password" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="password">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        {/* </div> */}
                        {/* <div className="register"> */}
                        <label htmlFor="confirmPassword">confirmPassword</label>
                        <Field type="password" name="confirmPassword" className="Form-control" id="confirmPassword" placehodler="Enter Your FirstName" />
                        <ErrorMessage name="confirmPassword">
                            {errorMsg => <div className="text-danger">{errorMsg}</div>}
                        </ErrorMessage>
                        {/* </div> */}
                        {/* <div className='register'> */}
                        <button type="submit" className="button">Submit<ToastContainer /></button>
                    </div>

                </Form>

            </div>
        </Formik >
    )
}
export default Registration
















