'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-400">CTF Event 2025</h1>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-slate-700">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4">Capture The Flag</h1>
            <p className="text-2xl text-slate-400">Challenge your cybersecurity skills</p>
          </div>

          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Welcome to our Capture The Flag (CTF) competition! Test your hacking abilities, solve
            challenging security puzzles, and compete with other participants on the leaderboard.
          </p>

          {user ? (
            <div className="flex gap-4">
              <Link href="/challenges">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg">
                  Start Solving
                </Button>
              </Link>
              <Link href="/leaderboard">
                <Button
                  variant="outline"
                  className="bg-transparent border-slate-600 text-white hover:bg-slate-700 px-8 py-2 text-lg"
                >
                  View Leaderboard
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link href="/rules">
                <Button
                  variant="outline"
                  className="bg-transparent border-slate-600 text-white hover:bg-slate-700 px-8 py-2 text-lg"
                >
                  Read Rules
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="bg-slate-800/50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-white mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">🔐 Diverse Challenges</h3>
              <p className="text-slate-300">
                Solve challenges across multiple categories like cryptography, web security,
                reverse engineering, and more.
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl font-bold text-green-400 mb-3">🏆 Earn Points</h3>
              <p className="text-slate-300">
                Each solved challenge rewards points based on difficulty. Accumulate points and
                climb the leaderboard.
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3">👥 Compete</h3>
              <p className="text-slate-300">
                Form teams or participate individually. Track your progress and see how you rank
                against other participants.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
