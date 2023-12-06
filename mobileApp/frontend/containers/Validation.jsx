export const loginEmail = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i,
    message: "Invalid email address",
  },
};

export const loginPassword = {
  required: "Password is required",
};

export const signUpUsername = {
  required: "Username is required",
  minLength: {
    value: 3,
    message: "Username must be at least 3 characters long",
  },
};

export const signUpEmail = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i,
    message: "Invalid email address",
  },
};

export const signUpPassword = {
  required: "Password is required",
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*\d)/,
    message: "Password must contain at least one letter and one number",
  },
};
