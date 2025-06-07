import messages from './messages';

const validationRules = {
  name: [
    {
      validate: (v) => v.trim().length > 0,
      message: messages.errors.required,
    },
  ],
  email: [
    {
      validate: (v) => /\S+@\S+\.\S+/.test(v),
      message: messages.errors.invalidEmail,
    },
  ],
  password: [
    {
      validate: (v) => v.length >= 6,
      message: messages.errors.passwordShort,
    },
  ],
  confirmPassword: [
    {
      validate: (v, all) => v === all.password,
      message: messages.errors.passwordMismatch,
    },
  ],
};

export default function validateForm(formData) {
  const errors = {};
  Object.entries(validationRules).forEach(([field, rules]) => {
    for (const rule of rules) {
      if (!rule.validate(formData[field], formData)) {
        errors[field] = rule.message;
        break; 
      }
    }
  });
  return errors;
}

