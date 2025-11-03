/*
  # Create Early Access Signups Table

  1. New Tables
    - `early_access_signups`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique, required)
      - `country` (text, required)
      - `created_at` (timestamptz, default now)
  
  2. Security
    - Enable RLS on `early_access_signups` table
    - Add policy for public inserts (signup form)
    - No read policies needed (admin only)
  
  3. Notes
    - Email is unique to prevent duplicate signups
    - Public can only insert their own data
    - No user authentication required for signups
*/

CREATE TABLE IF NOT EXISTS early_access_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  country text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE early_access_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for early access"
  ON early_access_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);