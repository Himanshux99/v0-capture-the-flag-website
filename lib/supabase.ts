import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type User = {
  id: string;
  email: string;
  username: string;
  team_name?: string;
  year: string;
  total_score: number;
  created_at: string;
};

export type Challenge = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  target_year: string;
  description: string;
  full_description?: string;
  flag_hash: string;
  points: number;
  resources?: Record<string, any>;
  created_at: string;
};

export type Submission = {
  id: string;
  user_id: string;
  challenge_id: string;
  flag_submitted: string;
  is_correct: boolean;
  submitted_at: string;
};

export type Solve = {
  id: string;
  user_id: string;
  challenge_id: string;
  solve_order?: number;
  solve_time: string;
};
