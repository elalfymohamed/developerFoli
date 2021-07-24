import React, { useState, useEffect, useContext } from "react"
// AXIOS
import axios from "axios"
// FROMIK
import { Formik, Field, Form } from "formik"
//
import { SocialLink } from "../constants"
import Context from "../store/context"
// image
import imgForm from "../assets/undraw_delivery_address_03n1.svg"

const FormContact = () => {
  // Theme
  const { state } = useContext(Context)
  //
  const [fieldErrors, setFieldErrors] = useState({})
  const validationRules = {
    name: val => !!val,
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val,
  }
  const validate = () => {
    let errors = {}
    let hasErrors = false
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key])
      hasErrors |= errors[key]
    }
    setFieldErrors(prev => ({ ...prev, ...errors }))
    return !hasErrors
  }
  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>
    }
  }
  useEffect(() => {
    if (Object.keys(fieldErrors).length > 0) {
      validate()
    }
  }, [])

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleOnChange = event => {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setFieldErrors({})
      setInputs({
        name: "",
        email: "",
        message: "",
      })
    }
  }
  const handleOnSubmit = event => {
    event.preventDefault()
    if (!validate()) {
      return
    }
    setServerState({ submitting: true })
    axios({
      method: "POST",
      url: "https://formspree.io/f/mleoobqz",
      data: inputs,
    })
      .then(r => {
        handleServerResponse(true, "Thanks!")
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error)
      })
  }
  return (
    <section className="form-section">
      <article className="form-contact">
        <h3>get in touch</h3>
        <Formik>
          <Form onSubmit={handleOnSubmit} noValidate>
            <div className="from-group">
              <Field
                name="name"
                id="name"
                value={inputs.name}
                onChange={handleOnChange}
                type="text"
                inputMode="text"
                placeholder="name"
                className={
                  fieldErrors.name ? "form-control error " : "form-control "
                }
                style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}
              />
              {renderFieldError("name")}
              <Field
                name="email"
                id="email"
                inputMode="email"
                value={inputs.email}
                onChange={handleOnChange}
                type="email"
                placeholder="email"
                className={
                  fieldErrors.email ? "form-control error  " : "form-control "
                }
                style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}
              />
              {renderFieldError("email")}
              <textarea
                name="message"
                id="message"
                inputMode="text"
                onChange={handleOnChange}
                rows="5"
                placeholder="message"
                value={inputs.message}
                className={
                  fieldErrors.message ? "form-control error " : "form-control"
                }
                spellCheck="false"
                style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}
              />
              {renderFieldError("message")}
            </div>
            <button
              type="submit"
              disabled={serverState.submitting}
              className={state.isDark ? "dark_mode" : " light_mode"}
            >
              Submit
            </button>
            {serverState.status && (
              <p
                className={
                  !serverState.status.ok ? "status error" : "status success"
                }
              >
                {serverState.status.msg}
              </p>
            )}
          </Form>
        </Formik>
      </article>

      <div className="contact-us-div">
        <img src={imgForm} alt="" />
        <div className="contact__info">
          <p>
            <strong>Phone: </strong> +201151802853
          </p>
          <p>
            <strong>Email: </strong> Elalfy.m002@gmail.com
          </p>
        </div>
        <SocialLink />
      </div>
      <div className="linear" />
    </section>
  )
}

export default FormContact
