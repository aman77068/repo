import { InputHTMLAttributes, ReactNode } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  children?: ReactNode;
}

export function FormField({ label, helperText, className = '', children, ...inputProps }: FormFieldProps) {
  return (
    <label className="space-y-2 text-sm text-slate-700">
      <span className="block font-medium">{label}</span>
      <input
        className={`w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 ${className}`}
        {...inputProps}
      />
      {helperText ? <span className="text-xs text-slate-500">{helperText}</span> : null}
      {children}
    </label>
  );
}
