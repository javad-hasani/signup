import { useCallback } from 'react';
import { useFormState, useFormMessage, useFormSubmitting, useFormConsts } from './useFormParts';
import { useFormHandleSubmit } from './useFormHandleSubmit';
import { useFormResetForm } from './useFormResetForm';
import { useFormHandleBlur } from './useFormHandleBlur';

export function useForm(initialState, validate, options = {}) {
  const { formData, setFormData, errors, setErrors, touched, setTouched } = useFormState(initialState);
  const { message, setMessage } = useFormMessage();
  const { isSubmitting, setIsSubmitting } = useFormSubmitting();
  const { validateOnChange, validateOnBlur } = useFormConsts(options);

  const setField = useCallback(
    (name, value) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setTouched((prev) => ({ ...prev, [name]: true }));
      if (validateOnChange) {
        const validationErrors = validate({ ...formData, [name]: value });
        setErrors(validationErrors);
      } else if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    },
    [errors, formData, validate, validateOnChange, setFormData, setTouched, setErrors]
  );

  const handleChange = useCallback(
    (eOrName, value) => {
      if (typeof eOrName === 'string') {
        setField(eOrName, value);
      } else {
        const { name, value } = eOrName.target;
        setField(name, value);
      }
    },
    [setField]
  );

  const resetForm = useFormResetForm({
    initialState,
    setFormData,
    setErrors,
    setTouched,
    setMessage,
    setIsSubmitting,
  });

  const handleSubmit = useFormHandleSubmit({
    formData,
    validate,
    options,
    setErrors,
    setMessage,
    setIsSubmitting,
    resetForm,
  });

  const handleBlur = useFormHandleBlur({
    formData,
    validate,
    validateOnBlur,
    setTouched,
    setErrors,
  });

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    touched,
    setTouched,
    message,
    setMessage,
    isSubmitting,
    setField,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}
