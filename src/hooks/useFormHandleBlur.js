import { useCallback } from 'react';

export function useFormHandleBlur({
  formData,
  validate,
  validateOnBlur,
  setTouched,
  setErrors,
}) {
  return useCallback(
    (e) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      if (validateOnBlur) {
        const validationErrors = validate(formData);
        setErrors(validationErrors);
      }
    },
    [formData, validate, validateOnBlur, setTouched, setErrors]
  );
}
