# Ownly Website

## Overview
A minimal, clean static landing page for Ownly with a Supabase-powered email waitlist.

## Project Structure
```
/root/ownly-website/
├── index.html          # Main landing page
├── styles.css          # Minimal, clean styling
├── app.js              # Supabase integration for waitlist
├── PROJECT.md          # This file
└── SUPABASE_SETUP.md   # Step-by-step Supabase setup guide
```

## Roadmap

- [x] Create landing page (index.html)
- [x] Add styling (styles.css)
- [x] Add Supabase integration (app.js)
- [x] Initialize git repo
- [ ] Configure Supabase (see SUPABASE_SETUP.md)
- [ ] Deploy to GitHub Pages
- [ ] Connect custom domain (optional)

## Implementation Details

### index.html
- Clean, single-page layout
- Hero section with "Ownly" branding
- "Coming Soon" tagline
- Brief description placeholder
- Email input + "Join Waitlist" button
- Success/error message area with aria-live for accessibility
- Loads Supabase JS client from CDN

### styles.css
- Minimal & clean aesthetic
- Centered layout with generous whitespace
- CSS custom properties for easy theming
- Subtle fade-in animations on page load
- Mobile responsive:
  - Stacked input/button layout on mobile (<480px)
  - Inline input/button layout on larger screens
- Light color palette with indigo accent (#4f46e5)
- Smooth transitions on interactions

### app.js
- Supabase client initialization with placeholder credentials
- Form submission handler
- Email validation (empty check + regex format validation)
- Demo mode when Supabase isn't configured
- Insert email into Supabase `waitlist` table
- Handles duplicate email errors (PostgreSQL error code 23505)
- Success/error feedback with auto-hide for success messages

## Supabase Setup

### 1. Create Project
Go to [supabase.com](https://supabase.com) and create a new project.

### 2. Create Waitlist Table
Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public form)
CREATE POLICY "Allow anonymous inserts" ON waitlist
    FOR INSERT
    TO anon
    WITH CHECK (true);
```

### 3. Update Credentials
In `app.js`, replace the placeholder values:

```javascript
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

Find these in your Supabase project: Settings → API

## Testing

1. **Open the page**: Open `index.html` in a browser
2. **Visual check**: Verify layout renders correctly and is responsive
3. **Form validation**:
   - Submit empty form → should show "Please enter your email address"
   - Submit invalid email → should show "Please enter a valid email address"
4. **Demo mode**: Without Supabase configured, form shows demo success message
5. **Live mode**: After configuring Supabase, test actual submission and duplicate handling

## Color Palette

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-bg` | #fafafa | Page background |
| `--color-text` | #1a1a1a | Primary text |
| `--color-text-muted` | #666 | Secondary text |
| `--color-accent` | #4f46e5 | Buttons, tagline |
| `--color-accent-hover` | #4338ca | Button hover |
| `--color-success` | #059669 | Success messages |
| `--color-error` | #dc2626 | Error messages |

## Future Enhancements (Ideas)
- Add social media links
- Add more detailed product description
- Implement email confirmation flow
- Add analytics tracking
- Create admin dashboard for viewing waitlist
