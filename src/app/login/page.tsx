'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      document.cookie = `lc_auth=ok; path=/; max-age=${60 * 60 * 24 * 7}`;
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-md container-px py-20 sm:py-28">
      <div className="glow-card p-8 sm:p-10">
        <h1 className="text-2xl font-semibold text-lub-ink tracking-tight">Log in</h1>
        <p className="mt-2 text-tech-gray-500 text-sm leading-relaxed">
          Use any email or username and password to continue to the control panel.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-tech-gray-500 mb-1.5">Email or Username</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-tech-gray-500 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <button type="submit" disabled={loading} className="w-full btn-primary disabled:opacity-50">
            {loading ? 'Signing in…' : 'Log in'}
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-tech-gray-500">
          <Link href="/" className="text-nb-lime hover:text-nb-lime-hover transition-colors">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
