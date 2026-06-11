import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ViewerDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
          👁️ Viewer Dashboard
        </div>
        <h1 className="text-4xl font-bold text-slate-950">Welcome, Viewer</h1>
        <p className="text-lg text-slate-600">View insights and read-only data from the platform.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-3xl font-bold text-slate-950">156</div>
          <p className="mt-2 text-sm text-slate-600">Available Posts</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-3xl font-bold text-slate-950">12.5K</div>
          <p className="mt-2 text-sm text-slate-600">Total Community Views</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="text-3xl font-bold text-slate-950">89</div>
          <p className="mt-2 text-sm text-slate-600">Active Contributors</p>
        </div>
      </div>

      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-950">Viewer Options</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            Browse Posts
          </button>
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            View Statistics
          </button>
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            Search Content
          </button>
          <button className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            My Bookmarks
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
