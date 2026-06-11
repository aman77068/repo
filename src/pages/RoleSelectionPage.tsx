import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthCard } from '../components/AuthCard';
import { Button } from '../components/Button';

const roles = [
  {
    id: 'admin',
    title: 'Admin',
    description: 'Manage users, settings, and full application permissions.'
  },
  {
    id: 'publisher',
    title: 'Publisher',
    description: 'Create content, update pages, and publish changes.'
  },
  {
    id: 'viewer',
    title: 'Viewer',
    description: 'View dashboard insights and read-only data.'
  }
];

export function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const authType = sessionStorage.getItem('auth_type');
    if (!authType) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <AuthCard title="Choose your role" description="Select the role that best matches your account." >
      <div className="space-y-4">
        {roles.map((role) => (
          <button
            key={role.id}
            type="button"
            onClick={() => setSelectedRole(role.id)}
            className={`w-full rounded-3xl border px-5 py-4 text-left transition hover:border-slate-400 ${
              selectedRole === role.id ? 'border-slate-900 bg-slate-100' : 'border-slate-200 bg-white'
            }`}
          >
            <span className="text-base font-semibold text-slate-950">{role.title}</span>
            <p className="mt-2 text-sm text-slate-600">{role.description}</p>
          </button>
        ))}

        <div className="mt-6">
          <Button
            type="button"
            label={selectedRole ? `Continue as ${selectedRole}` : 'Select a role to continue'}
            variant={selectedRole ? 'primary' : 'secondary'}
            className="w-full"
            disabled={!selectedRole}
            onClick={() => {
              if (selectedRole) {
                login(selectedRole);
                sessionStorage.removeItem('auth_type');
                sessionStorage.removeItem('auth_email');
                sessionStorage.removeItem('auth_name');
                navigate(`/dashboard/${selectedRole}`);
              }
            }}
          />
        </div>

        <p className="text-center text-sm text-slate-500">
          Need to change account?{' '}
          <Link className="font-medium text-slate-900 hover:text-slate-700" to="/login">
            Return to login
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
