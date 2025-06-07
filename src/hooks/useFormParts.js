import { useState } from 'react';

export function useFormState(initialState) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  return { formData, setFormData, errors, setErrors, touched, setTouched };
}

export function useFormMessage() {
  const [message, setMessage] = useState({ type: '', text: '' });
  return { message, setMessage };
}

export function useFormSubmitting() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return { isSubmitting, setIsSubmitting };
}

export function useFormConsts(options) {
  return {
    validateOnChange: options.validateOnChange ?? true,
    validateOnBlur: options.validateOnBlur ?? false,
  };
}
