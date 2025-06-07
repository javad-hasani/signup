import React from "react";
import InputField from "./InputField";

export default function FormFields({ fields, values, errors, onChange }) {
  return fields.map((field, idx) => (
    <div key={field.id} className={`animate-slideUp${idx > 0 ? ` delay-${idx * 100}` : ''}`}>
      <InputField
        {...field}
        value={values[field.name]}
        onChange={onChange}
        error={errors ? errors[field.name] : ''}
      />
    </div>
  ));
}
