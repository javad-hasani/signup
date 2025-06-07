import { useCallback } from 'react';

export function useFormResetForm({
  initialState,
  setFormData,
  setErrors,
  setTouched,
  setMessage,
  setIsSubmitting,
}) {
  return useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
    setMessage({ type: '', text: '' });
    setIsSubmitting(false);
  }, [initialState, setFormData, setErrors, setTouched, setMessage, setIsSubmitting]);
}
