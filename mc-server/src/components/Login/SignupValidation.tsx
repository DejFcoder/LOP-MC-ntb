interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

interface SignupFormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const SignupValidation = (values: SignupFormValues): SignupFormErrors => {
  let errors: SignupFormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (!values.name) {
    errors.name = "Name should not be empty";
  }

  if (!values.email) {
    errors.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Password should not be empty";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number";
  }

  return errors;
};

export default SignupValidation;
