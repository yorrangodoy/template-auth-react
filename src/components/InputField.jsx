import React from 'react';

export default function InputField({
  id,
  label,
  type = 'text',
  register,
  error,
  autoFocus = false,
  placeholder = '',
  ...rest
}) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="row">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        autoFocus={autoFocus}
        {...register}
        {...rest}
      />
      {error && (
        <div id={`${id}-error`} className="error" role="alert" aria-live="polite">
          {error.message}
        </div>
      )}
    </div>
  );
}
