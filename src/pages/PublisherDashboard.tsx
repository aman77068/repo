import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function PublisherDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-900">
          📝 Publisher Dashboard
        </div>
        <h1 className="text-4xl font-bold text-slate-950">Welcome, Publisher</h1>
        <p className="text-lg text-slate-600">Create, edit, and publish content across the platform.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-3xl font-bold text-slate-950">28</div>
          <p className="mt-2 text-sm text-slate-600">Published Posts</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-3xl font-bold text-slate-950">7</div>
          <p className="mt-2 text-sm text-slate-600">Drafts</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-3xl font-bold text-slate-950">3.2K</div>
          <p className="mt-2 text-sm text-slate-600">Total Views</p>
        </div>
      </div>

      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-950">Publisher Tools</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            Create New Post
          </button>
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            View Drafts
          </button>
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            Published Posts
          </button>
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            Analytics
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-full border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
