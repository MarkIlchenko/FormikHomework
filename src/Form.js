import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Only numbers are allowed').length(12,'Phone must be exactly 12 digits').required('Phone is required'),
});

const initialValues = {
    name: '',
    email: '',
    phone: '',
};

const YourForm = () => {
    
    return (
         <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={values => {
                  alert(JSON.stringify(values, null, 2));
              }}
         >
             {formik => (
                  <Form>
                      <div>
                          <label htmlFor="name">Name:</label>
                          <Field type="text" name="name" id="name" />
                          <ErrorMessage name="name" />
                      </div>
                      <div>
                          <label htmlFor="email">Email:</label>
                          <Field type="email" name="email" id="email" />
                          <ErrorMessage name="email" />
                      </div>
                      <div>
                          <label htmlFor="phone">Phone:</label>
                          <Field type="text" name="phone" id="phone" />
                          <ErrorMessage name="phone" />
                      </div>
                      <button type="submit">Submit</button>
                  </Form>
             )}
         </Formik>
    );
};

export default YourForm;
