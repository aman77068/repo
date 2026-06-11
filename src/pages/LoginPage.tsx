import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../services/UserService';
import { AuthCard } from '../components/AuthCard';
import { Button } from '../components/Button';
import { FormField } from '../components/FormField';

interface FormErrors {
  email?: string;
  password?: string;
}

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!UserService.userExists(email)) {
      newErrors.email = 'User not found. Please sign up first.';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (UserService.userExists(email) && !UserService.validateLogin(email, password)) {
      newErrors.password = 'Incorrect password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      sessionStorage.setItem('auth_email', email);
      sessionStorage.setItem('auth_type', 'login');
      navigate('/role-selection');
    }
  };

  return (
    <AuthCard title="Welcome back" description="Sign in to continue to Project AS.">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <FormField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <FormField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="mt-2 text-xs text-red-600">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-950 focus:ring-slate-900" />
            Remember me
          </label>
          <Link className="font-medium text-slate-900 hover:text-slate-700" to="/signup">
            Create account
          </Link>
        </div>

        <Button type="submit" label="Sign in" variant="primary" className="w-full" />
      </form>
    </AuthCard>
  );
}
