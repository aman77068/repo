import { ReactNode } from 'react';

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-950">{title}</h1>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
