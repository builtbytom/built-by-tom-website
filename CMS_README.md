# Decap CMS (Netlify CMS) Setup for Built By Tom

## Overview
Decap CMS (formerly Netlify CMS) has been configured to allow editing of all content on the Built By Tom website without touching code.

## Initial Setup

### 1. Enable Netlify Identity
After deploying to Netlify:
1. Go to your Netlify site dashboard
2. Navigate to "Identity" tab
3. Click "Enable Identity"
4. Under "Registration preferences", choose "Invite only" for security
5. Under "External providers", you can optionally enable Google/GitHub login
6. Click "Settings and usage" and set up email templates if desired

### 2. Add Your User
1. In the Identity tab, click "Invite users"
2. Enter your email address
3. Check your email and accept the invitation
4. Set up your password

### 3. Enable Git Gateway
1. In Netlify dashboard, go to "Site configuration" > "Identity" > "Services"
2. Under "Git Gateway", click "Enable Git Gateway"
3. This allows the CMS to commit changes to your GitHub repo

## Accessing the CMS

1. Navigate to `https://your-site.netlify.app/admin`
2. Log in with your Netlify Identity credentials
3. You'll see the CMS dashboard with all editable content

## CMS Structure

### Pages
Edit main site pages:
- **Homepage**: Hero, services, testimonials, quiz
- **About Page**: Story, values, team info
- **Contact Page**: Contact methods, form settings

### Services
Create and edit service offerings:
- Pricing and timelines
- Features and benefits
- Process steps
- FAQs

### Industry Pages
Create targeted pages for different industries:
- Industry-specific problems/solutions
- Case studies
- Custom messaging

### Demo Websites
Manage the sample/demo sites:
- Business details
- Color schemes (with color picker)
- Content sections
- Image galleries

### Site Settings
Global configuration:
- **General**: Site title, contact info
- **Navigation**: Menu structure
- **Theme**: Brand colors, fonts

## Editing Content

1. Click on any collection or page
2. Make your changes using the visual editor
3. Click "Save" to create a draft
4. Click "Publish" to make changes live
5. Changes will automatically deploy via Netlify

## Working with Images

- Click the image widget to upload new images
- Images are automatically optimized
- Stored in `/public/images`
- Use descriptive filenames for SEO

## Editorial Workflow

The CMS uses an editorial workflow:
1. **Draft**: Initial save creates a draft
2. **In Review**: Optional review stage
3. **Ready**: Approved for publishing
4. **Published**: Live on the site

## Color Customization

Theme colors can be edited in "Site Settings > Theme & Colors":
- Use the color picker for visual selection
- Changes apply site-wide
- Test on different screens

## Best Practices

1. **Always preview** before publishing
2. **Use descriptive titles** for SEO
3. **Optimize images** before uploading (under 1MB preferred)
4. **Test on mobile** after making changes
5. **Keep content concise** for better user experience

## Troubleshooting

### Can't log in?
- Check if Netlify Identity is enabled
- Verify you've accepted the invitation
- Try clearing browser cache

### Changes not showing?
- Ensure you clicked "Publish" not just "Save"
- Wait 1-2 minutes for deployment
- Check Netlify deploy status

### Images not uploading?
- Check file size (keep under 5MB)
- Ensure valid image format (JPG, PNG, WebP)
- Check available storage in Netlify

## Adding New Users

1. Go to Netlify Identity settings
2. Click "Invite users"
3. They'll receive an email invitation
4. Once accepted, they can access the CMS

## Support

For CMS issues:
- Check [Decap CMS docs](https://decapcms.org/docs/)
- Review [Netlify Identity docs](https://docs.netlify.com/visitor-access/identity/)

For site-specific issues:
- Contact your developer
- Check the deployment logs in Netlify