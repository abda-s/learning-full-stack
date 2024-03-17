import React from 'react'

import { Formik, Form, Field, ErrorMessage } from "formik"

function CreatePost() {
  return (
    <div className="createPostPage">
        {/* initialValues={} onSubmit={} validationSchema={}  */}
        <Formik >
            <Form className="formContainer">
                <label>Tilte: </label>
                <Field id="inputCreatPost" name="title" placeholder="Ex. title.... " />
                <label>Post: </label>
                <Field id="inputCreatPost" name="posttext" placeholder="Ex. wow.... " />
                <label>username: </label>
                <Field id="inputCreatPost" name="username" placeholder="Ex. 3adas.... " />

                <button type='submit' ></button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost