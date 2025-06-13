# Google reCAPTCHA v3 Setup Guide

This guide explains how to set up Google reCAPTCHA v3 for the WebsiteHealthQuiz component.

## Prerequisites

1. A Google account
2. Access to your Netlify dashboard (for environment variables)

## Setup Steps

### 1. Create reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click the "+" button to create a new site
3. Fill in the form:
   - **Label**: Your site name (e.g., "Built By Tom Quiz")
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domains:
     - `localhost` (for local development)
     - `ibuildcalm.com`
     - `www.ibuildcalm.com`
     - Any Netlify preview domains (e.g., `*.netlify.app`)
4. Accept the terms and click "Submit"
5. You'll receive two keys:
   - **Site Key**: This is public and used in the frontend
   - **Secret Key**: This is private and used in the backend

### 2. Configure Environment Variables

#### Local Development

1. Create a `.env.local` file in the root directory (copy from `.env.local.example`)
2. Add your keys:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key-here
   RECAPTCHA_SECRET_KEY=your-secret-key-here
   ```

#### Netlify Production

1. Go to your Netlify dashboard
2. Navigate to Site Settings → Environment Variables
3. Add the following variables:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your reCAPTCHA site key
   - `RECAPTCHA_SECRET_KEY`: Your reCAPTCHA secret key

### 3. How It Works

1. **Frontend Protection**: The quiz form includes reCAPTCHA v3 which runs invisibly in the background
2. **Score-based Verification**: reCAPTCHA v3 provides a score (0.0 to 1.0) indicating the likelihood of a human user
3. **Backend Validation**: The Netlify function verifies the token and checks if the score is above 0.5
4. **Graceful Degradation**: If reCAPTCHA is not configured, the form still works (useful for development)

### 4. Testing

1. In development, the form will work even without reCAPTCHA keys (it shows a warning in the console)
2. With keys configured, you should see the reCAPTCHA badge in the bottom-right corner
3. Check the browser console for any reCAPTCHA errors
4. The Netlify function logs will show the reCAPTCHA score for each submission

### 5. Customizing the Score Threshold

The current threshold is set to 0.5 in `/netlify/functions/quiz-report.js`. You can adjust this based on your needs:
- Lower threshold (e.g., 0.3): More permissive, fewer false positives
- Higher threshold (e.g., 0.7): More restrictive, better spam protection

### 6. Monitoring

- Check the [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) for analytics
- Monitor suspicious traffic patterns
- Adjust the score threshold if needed

### 7. Troubleshooting

**reCAPTCHA badge not showing:**
- Check if `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- Ensure the domain is added to your reCAPTCHA site settings

**Form submissions failing with reCAPTCHA error:**
- Verify `RECAPTCHA_SECRET_KEY` is set in Netlify
- Check if the score threshold is too high
- Look at Netlify function logs for specific errors

**Development issues:**
- reCAPTCHA works with `localhost` - make sure it's added to allowed domains
- The form works without keys in development (with console warnings)