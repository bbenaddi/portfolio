# Personal Portfolio

My personal portfolio website built with Next.js, showcasing my experience, skills, and projects.

## Features

- Real-time experience counter
- Responsive design with Tailwind CSS
- Dynamic sections for:
  - Experience
  - Skills
  - Education
  - Certifications
- Social media links
- Modern UI with clean design

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Lucide Icons

## Development

To run the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is in use).

## Deployment

This site is deployed as a GitHub User Site using GitHub Actions. The deployment is automated on every push to the main branch.

You can visit the live site at: https://bbenaddi.github.io

## Local Build

To build the site locally:

```bash
npm run build
```

This will create a static export in the `out` directory.

## Project Structure

- `src/app/` - Main application pages and components
- `src/components/` - Reusable UI components
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions deployment configuration
