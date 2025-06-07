import { useCallback } from 'react';
import messages from '../constants/messages';

export function useFormHandleSubmit({
  formData,
  validate,
  options,
  setErrors,
  setMessage,
  setIsSubmitting,
  resetForm,
}) {
  return useCallback(
    async (e) => {
      if (e && e.preventDefault) e.preventDefault();
      setIsSubmitting(true);
      let validationErrors = validate(formData);
      if (options.asyncValidate) {
        const asyncErrors = await options.asyncValidate(formData);
        validationErrors = { ...validationErrors, ...asyncErrors };
      }
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        if (!options.suppressToast) {
          setMessage({
            type: 'error',
            text: options.errorMessage || messages.errors.formError,
          });
        }
        options.onError && options.onError(validationErrors, formData);
      } else {
        setErrors({});
        if (!options.suppressToast) {
          setMessage({
            type: 'success',
            text: options.successMessage || messages.success.signup,
          });
        }
        if (options.onSuccess) await options.onSuccess(formData);
        if (options.resetOnSuccess) resetForm();
      }
      setIsSubmitting(false);
    },
    [formData, validate, options, resetForm, setErrors, setMessage, setIsSubmitting]
  );
}
