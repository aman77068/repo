import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './context/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import { RoleSelectionPage } from './pages/RoleSelectionPage';
import { SignupPage } from './pages/SignupPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { PublisherDashboard } from './pages/PublisherDashboard';
import { ViewerDashboard } from './pages/ViewerDashboard';

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 flex max-w-4xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-soft">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Project AS</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <Link className="rounded-full border border-slate-200 px-4 py-2 transition hover:bg-slate-100" to="/login">
            Login
          </Link>
          <Link className="rounded-full border border-slate-200 px-4 py-2 transition hover:bg-slate-100" to="/role-selection">
            Role Select
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/role-selection" element={<RoleSelectionPage />} />
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/publisher"
          element={
            <ProtectedRoute requiredRole="publisher">
              <PublisherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/viewer"
          element={
            <ProtectedRoute requiredRole="viewer">
              <ViewerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
