import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Formik, Field, Form } from 'formik';
import SocialLink from '../constants/SocialLink'
// import imgForm from '../assets/undraw_Forms_re_pkrt1.svg'
import imgForm from '../assets/undraw_delivery_address_03n0.svg'



const FormContact = () => {
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    name: val => !!val,
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };
  useEffect(() => {

    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, []);

  const [inputs, setInputs] = useState({
    name: '',
    email: "",
    message: ""
  });
  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        name: "",
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/mleoobqz",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };
  return (
    <section className="form-section">
      <article className="form-contact">
        <h3>get in touch</h3>
        <Formik >

          <Form onSubmit={handleOnSubmit} noValidate>
            <div className="from-group">
              <Field name="name" id="name" value={inputs.name} onChange={handleOnChange}
                type='text' placeholder="name"
                className={fieldErrors.name ? "form-control error" : "form-control"} />
              {renderFieldError("name")}
              <Field name="email" id="email" value={inputs.email}
                onChange={handleOnChange}
                type='email' placeholder="email"
                className={fieldErrors.email ? "form-control error" : "form-control"} />
              {renderFieldError("email")}
              <textarea name="message" id="message" onChange={handleOnChange} rows="5"
                placeholder="message" value={inputs.message}
                className={fieldErrors.message ? "form-control error" : "form-control"}
                spellCheck="false" />
              {renderFieldError("message")}
            </div>
            <button type="submit" disabled={serverState.submitting}>Submit</button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "status error" : "status success"}>
                {serverState.status.msg}
              </p>
            )}
          </Form>

        </Formik>
      </article>

      <div className="contact-us-div">
        <img src={imgForm} alt="" />
        <p><strong>Email:</strong> Elalfy.m002@gmail.com</p>
        <SocialLink />
      </div>
    </section>
  )
}


export default FormContact