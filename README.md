# Entrain Labs - Digital Marketing Academy Website

A modern, responsive website for Entrain Labs, the best digital marketing academy in Kerala. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Highlights the academy's unique approach with statistics
- **Why Choose Us**: Key benefits and features
- **Our Mentors**: Meet the expert instructors
- **Student Testimonials**: Real feedback from successful students
- **Courses**: Comprehensive digital marketing curriculum including:
  - Performance Marketing
  - Web Development
  - Content Creation
  - SEO
  - Social Media Marketing
  - Email Marketing
- **CTA Section**: Enrollment call-to-action
- **FAQ**: Common questions answered
- **Contact Form**: Get in touch with the academy
- **Blog Section**: Latest updates and insights
- **Responsive Design**: Works perfectly on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd entrain-labs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
entrain-labs/
├── app/                          # Next.js app directory
│   └── page.tsx                  # Main homepage
├── components/
│   ├── entrain/                  # Custom Entrain Labs components
│   │   └── courses-section.tsx
│   ├── shadcn-space/             # shadcn/ui block components
│   │   └── blocks/
│   └── ui/                       # Base UI components
├── lib/
│   ├── data.ts                   # Content data (courses, FAQs, etc.)
│   └── utils.ts                  # Utility functions
├── assets/
│   └── logo/                     # Logo component
└── public/                       # Static assets

```

## Customization

### Update Content

Edit the content in `lib/data.ts` to customize:
- Course offerings
- Mentor information
- Testimonials
- FAQ items

### Modify Sections

Each section is a separate component in `components/shadcn-space/blocks/`. You can:
- Reorder sections in `app/page.tsx`
- Customize styling in individual component files
- Add or remove sections as needed

### Change Colors & Theme

Modify `app/globals.css` to update the color scheme and theme variables.

## Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Framer Motion**: Smooth animations
- **Lucide Icons**: Beautiful icon library

## License

This project is created for Entrain Labs Digital Marketing Academy.

## Support

For questions or support, please contact Entrain Labs through the website contact form.
"# entrainlabs" 
