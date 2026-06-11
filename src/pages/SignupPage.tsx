import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../services/UserService';
import { AuthCard } from '../components/AuthCard';
import { Button } from '../components/Button';
import { FormField } from '../components/FormField';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (UserService.userExists(email)) {
      newErrors.email = 'Email already registered. Please log in instead.';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      const userCreated = UserService.createUser(email, password, name);
      if (userCreated) {
        sessionStorage.setItem('auth_email', email);
        sessionStorage.setItem('auth_name', name);
        sessionStorage.setItem('auth_type', 'signup');
        navigate('/role-selection');
      } else {
        setErrors({ email: 'Failed to create account. Email may already exist.' });
      }
    }
  };

  return (
    <AuthCard title="Create your account" description="Sign up quickly and choose your role.">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <FormField
            label="Full name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
        </div>

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

        <Button type="submit" label="Create account" variant="primary" className="w-full" />

        <p className="text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link className="font-medium text-slate-900 hover:text-slate-700" to="/login">
            Log in
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
