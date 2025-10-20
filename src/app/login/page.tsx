'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
    <main className="mx-auto max-w-md container-px py-16">
      <h1 className="text-2xl font-semibold">Log in</h1>
      <p className="mt-2 text-tech-gray-300 text-sm">Use any email/username and password to continue.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-tech-gray-300">Email or Username</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md bg-tech-gray-800/60 border border-white/10 px-3 py-2 text-sm" required />
        </div>
        <div>
          <label className="block text-sm text-tech-gray-300">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-md bg-tech-gray-800/60 border border-white/10 px-3 py-2 text-sm" required />
        </div>
        <button type="submit" disabled={loading} className="w-full rounded-md bg-tech-red px-4 py-2 text-sm font-medium text-white hover:opacity-95 disabled:opacity-50">
          {loading ? 'Signing in…' : 'Log in'}
        </button>
      </form>
    </main>
  );
}


