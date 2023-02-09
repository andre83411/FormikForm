import React from "react";
import ReactDOM from 'react-dom';
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField : '',
      pswField : ''
    },
  
    onSubmit: values => {
    
      console.log('form: ', values)
    },
    validate : values => {
        let errors = {};
        if(!values.emailField) errors.emailField = 'Field Required';
        else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.emailField
          )
         ) errors.emailField = 'Username should be an email';
      
        if (!values.pswField) errors.pswField = 'Field Required';

        else alert ('Login Successful');

        return errors;

    }
  
  });

  return (
    <div>

       <form id onSubmit = {formik.handleSubmit}>
        <div>Username</div>
        <input id = "emailField" name = "emailField" type = "text" onChange={formik.handleChange} value = {formik.values.emailField}></input>
        {formik.errors.emailField ? <div id = "emailError" style = {{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input id = "pswField" name = "pswField" /*id = "pswField"*/ type = "text" onChange={formik.handleChange} value = {formik.values.pswField}></input>
        {formik.errors.pswField ? <div id = "pswError" style = {{color:'red'}}>{formik.errors.pswField}</div>: null}
        <button id = "submitBtn" name = "submitBtn" type = "submit">Submit</button>
      </form>
    </div>
  );
}
console.log('git testing');
export default App;
