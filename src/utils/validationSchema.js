import * as Yup from 'yup';

export const personalInfoSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  dateOfBirth: Yup.date()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future'),
  nationality: Yup.string().required('Nationality is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone is required'),
});

export const travelPreferencesSchema = Yup.object({
  departureDate: Yup.date()
    .required('Departure Date is required')
    .min(new Date(), 'Departure Date cannot be in the past'),
  returnDate: Yup.date()
    .required('Return Date is required')
    .min(Yup.ref('departureDate'), 'Return Date must be after Departure Date'),
  accommodation: Yup.string().required('Accommodation is required'),
});

export const healthSafetySchema = Yup.object({
  healthDeclaration: Yup.boolean()
    .oneOf([true], 'You must agree to the health declaration'),
  emergencyContact: Yup.string().required('Emergency Contact is required'),
  medicalConditions: Yup.string(),
});