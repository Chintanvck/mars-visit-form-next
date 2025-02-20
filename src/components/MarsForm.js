import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  personalInfoSchema,
  travelPreferencesSchema,
  healthSafetySchema,
} from '../utils/validationSchema';
import styles from '../styles/MarsForm.module.css';

const MarsForm = () => {
  const [stage, setStage] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const nextStage = () => setStage(stage + 1);
  const prevStage = () => setStage(stage - 1);

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    setSubmitted(true);
    // alert('Application submitted successfully!');
  };

  const validationSchema =
    stage === 1
      ? personalInfoSchema
      : stage === 2
      ? travelPreferencesSchema
      : healthSafetySchema;

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <div className={styles.successMessage}>
          <h2>Application Submitted Successfully!</h2>
          <p>We will review your application and get back to you.</p>
        </div>
      ) : (
        <Formik
          initialValues={{
            fullName: "",
            dateOfBirth: "",
            nationality: "",
            email: "",
            phone: "",
            departureDate: "",
            returnDate: "",
            accommodation: "",
            specialRequests: "",
            healthDeclaration: false,
            emergencyContact: "",
            medicalConditions: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isValid, dirty }) => (
            <Form>
              {stage === 1 && (
                <div>
                  <h2 className={styles.heading}>Personal Information</h2>
                  <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <Field type="text" name="fullName" placeholder="Full Name" />
                  <ErrorMessage name="fullName" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Date Of Birth</label>
                  <Field type="date" name="dateOfBirth" className={styles.date}/>
                  <ErrorMessage name="dateOfBirth" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Nationality</label>
                  <Field type="text" name="nationality" placeholder="Nationality" />
                  <ErrorMessage name="nationality" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Email</label>
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <Field type="tel" name="phone" placeholder="Phone" />
                  <ErrorMessage name="phone" component="div" className={styles.error} />
                  </div>
                </div>
              )}

              {stage === 2 && (
                <div>
                  <h2 className={styles.heading}>Travel Preferences</h2>

                  <div className={styles.formGroup}>
                  <label>Departure Date</label>
                  <Field type="date" name="departureDate" />
                  <ErrorMessage name="departureDate" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Return Date</label>
                  <Field type="date" name="returnDate" />
                  <ErrorMessage name="returnDate" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Accomodation Preferences</label>
                  <Field as="select" name="accommodation">
                    <option value="" disabled>
                      Select Accommodation
                    </option>
                    <option value="Space Hotel">Space Hotel</option>
                    <option value="Martian Base">Martian Base</option>
                  </Field>
                  <ErrorMessage name="accommodation" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Special Requests</label>
                  <Field as="textarea" name="specialRequests" placeholder="Special Requests" />
                  </div>
                </div>
              )}

              {stage === 3 && (
                <div>
                  <h2 className={styles.heading}>Health and Safety</h2>
                  <div className={styles.checkboxContainer}>
                  
                    <Field type="checkbox" name="healthDeclaration" />
                    <label>
                    I confirm that I am in good health for space travel.
                  </label>
                  </div>
                  <ErrorMessage name="healthDeclaration" component="div" className={styles.error} />
                  

                  <div className={styles.formGroup}>
                  <label>Emergency Contact</label>
                  <Field type="text" name="emergencyContact" placeholder="Emergency Contact" />
                  <ErrorMessage name="emergencyContact" component="div" className={styles.error} />
                  </div>

                  <div className={styles.formGroup}>
                  <label>Medical Condition</label>
                  <Field as="textarea" name="medicalConditions" placeholder="Medical Conditions" />
                  </div>
                </div>
              )}

              <div className={styles.buttonContainer}>
                {stage > 1 && (
                  <button type="button" onClick={prevStage}className={styles.button}>
                    Previous
                  </button>
                )}
                {stage < 3 ? (
                  <button
                    type="button"
                    onClick={nextStage}
                    className={styles.button}
                    disabled={!isValid || !dirty}
                  >
                    Next
                  </button>
                ) : (
                  <button type="submit" className={styles.button}>Submit</button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default MarsForm;