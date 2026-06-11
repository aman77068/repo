type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-900',
  secondary:
    'border border-slate-300 bg-white text-slate-950 hover:bg-slate-100 focus-visible:ring-slate-400'
};

export function Button({ label, variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}
