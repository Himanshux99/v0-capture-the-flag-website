'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-6 block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">CTF Event Rules</h1>

        <div className="space-y-6">
          {/* Eligibility */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Eligibility</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Open to all students regardless of year or background</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Individual or team participation is allowed (maximum 5 members per team)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Must register with a valid email address</span>
              </li>
            </ul>
          </Card>

          {/* Scoring System */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Scoring System</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    Easy
                  </Badge>
                  <span className="text-slate-300">10 points</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    Medium
                  </Badge>
                  <span className="text-slate-300">25 points</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                    Hard
                  </Badge>
                  <span className="text-slate-300">50 points</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Points are awarded upon successful flag submission. The leaderboard is ranked by
                total points earned.
              </p>
            </div>
          </Card>

          {/* Challenge Categories */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Challenge Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🔐 Cryptography</h3>
                <p className="text-slate-400 text-sm">
                  Solve encryption and decryption challenges
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🌐 Web Security</h3>
                <p className="text-slate-400 text-sm">
                  Find vulnerabilities in web applications
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🔍 Reverse Engineering</h3>
                <p className="text-slate-400 text-sm">
                  Analyze and understand compiled binaries
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🖥️ Forensics</h3>
                <p className="text-slate-400 text-sm">
                  Investigate digital artifacts and logs
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🔧 Miscellaneous</h3>
                <p className="text-slate-400 text-sm">
                  Various security puzzles and challenges
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">📡 Networking</h3>
                <p className="text-slate-400 text-sm">
                  Network security and packet analysis
                </p>
              </div>
            </div>
          </Card>

          {/* Code of Conduct */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">Code of Conduct</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">1.</span>
                <span>
                  <strong>No cheating:</strong> Do not share flags or solutions with other participants
                  during the competition
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">2.</span>
                <span>
                  <strong>No external assistance:</strong> You must solve challenges without using
                  solutions from external sources or AI tools
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">3.</span>
                <span>
                  <strong>No hacking:</strong> Do not attempt to hack or access the platform itself
                  or other participants' accounts
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">4.</span>
                <span>
                  <strong>Respect time limits:</strong> Submit flags within the specified competition
                  timeframe
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">5.</span>
                <span>
                  <strong>Respectful conduct:</strong> Maintain a respectful and professional attitude
                  towards all participants and organizers
                </span>
              </li>
            </ul>
          </Card>

          {/* Marking Scheme */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Marking Scheme</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Winners are determined by their position on the leaderboard at the end of the
                competition. The ranking is calculated as follows:
              </p>
              <div className="bg-slate-700/50 p-4 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-semibold">🥇 1st Place</span>
                  <span>Highest total points</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-semibold">🥈 2nd Place</span>
                  <span>Second highest total points</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-semibold">🥉 3rd Place</span>
                  <span>Third highest total points</span>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                In case of a tie in points, the participant who reached that score first (earliest
                timestamp) will rank higher.
              </p>
            </div>
          </Card>

          {/* FAQ */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I submit multiple flags?
                </h3>
                <p className="text-slate-400">
                  Yes, you can make multiple attempts per challenge. Only your first correct
                  submission will be counted for the solve.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What if I forget my password?
                </h3>
                <p className="text-slate-400">
                  Contact the event organizers through the support email for account recovery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can teams change members during the competition?
                </h3>
                <p className="text-slate-400">
                  No, team composition is locked after initial registration. Plan your team carefully.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center py-8">
            <p className="text-slate-300 mb-6">Ready to participate in the CTF event?</p>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
