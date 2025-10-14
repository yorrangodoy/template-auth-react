import React, { useState } from 'react';

export default function PasswordField({
  id,
  label,
  register,
  error,
  autoFocus = false,
  placeholder = '',
  ...rest
}) {
  const [show, setShow] = useState(false);
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="row">
      <label htmlFor={id}>{label}</label>
      <div className="input-wrap">
        <input
          id={id}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          autoFocus={autoFocus}
          {...register}
          {...rest}
        />
        <button
          type="button"
          className="eye"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
          title={show ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {show ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
      {error && (
        <div id={`${id}-error`} className="error" role="alert" aria-live="polite">
          {error.message}
        </div>
      )}
    </div>
  );
}
