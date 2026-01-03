# Al-Mehmood Hajj & Umrah Website

A premium, visually rich single-page landing website for Al-Mehmood Hajj & Umrah travel company.

## Features

- **Premium Islamic Design**: Dark teal/emerald green base with gold accents
- **Fully Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Subtle Framer Motion animations throughout
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## Sections

1. **Hero Section**: Full-width hero with gradient background and Islamic patterns
2. **Trust & Authority**: Feature cards showcasing company credentials
3. **Umrah Packages**: Elegant pricing cards with detailed package information
4. **Journey Process**: Step-by-step timeline of the booking process
5. **Contact/CTA**: Multiple contact options with call-to-action

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
almehmood/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── HeroSection.tsx     # Hero section component
│   ├── TrustSection.tsx    # Trust features component
│   ├── PackagesSection.tsx # Pricing packages component
│   ├── JourneySection.tsx  # Journey timeline component
│   └── ContactSection.tsx  # Contact and footer component
├── lib/
│   └── data.ts             # Content and configuration data
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Customization

### Update Content

Edit `/lib/data.ts` to update:
- Company information
- Contact details
- Package pricing
- Trust features
- Journey steps

### Modify Colors

Edit `/tailwind.config.ts` to customize the color scheme:
- `islamic-teal`: Main brand color
- `islamic-gold`: Accent color

### Add Sections

Create new components in `/components` and import them in `/app/page.tsx`.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## License

© 2026 Al-Mehmood Hajj & Umrah. All rights reserved.

## Contact

- **Phone**: 091 5702084, 0300 5960085, 0340 7221765
- **Email**: almehmoodhajjservices@gmail.com
- **License**: Tourism License #3395
