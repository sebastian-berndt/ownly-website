# Supabase Setup Guide

## Step 1: Create the waitlist table

1. Go to your Supabase project dashboard
2. Click **SQL Editor** in the left sidebar
3. Click **New query**
4. Paste and run this SQL:

```sql
CREATE TABLE waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON waitlist
    FOR INSERT
    TO anon
    WITH CHECK (true);
```

5. Click **Run** (or Cmd/Ctrl + Enter)

---

## Step 2: Get your API credentials

1. Click **Settings** (gear icon) in left sidebar
2. Click **API** under Configuration
3. Copy these two values:
   - **Project URL** (e.g. `https://abc123.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

---

## Step 3: Update app.js

Give Claude the two values to update app.js, or manually edit:

```javascript
const SUPABASE_URL = 'https://your-project-url.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

---

## Step 4: Test

1. Open index.html in browser
2. Enter an email and submit
3. Check Supabase: Table Editor → waitlist

---

## Done!

Your waitlist is now live.
