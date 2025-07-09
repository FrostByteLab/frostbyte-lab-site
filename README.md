# FrostByte Lab - Official Website

A modern, professional website for FrostByte Lab, a freelance software development and AI integration company.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15+ and optimized for speed
- **SEO Optimized**: Proper meta tags, structured data, and performance optimization
- **Contact Form**: Working contact form with email integration preparation
- **Professional Sections**: About, Services, Projects, and Contact pages

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4.1+
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)
- **Email**: API route ready for email service integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   └── ui/               # UI components
│       └── ContactForm.tsx
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frostbyte-lab-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Integration

The contact form is set up with an API route at `/api/contact`. To enable actual email sending, you'll need to integrate with an email service. Here are some options:

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Install the package: `npm install resend`
3. Update the API route with your Resend integration

### Option 2: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Install the package: `npm install @sendgrid/mail`
3. Update the API route with your SendGrid integration

### Option 3: Nodemailer
1. Install the package: `npm install nodemailer`
2. Configure with your SMTP settings
3. Update the API route

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Environment Variables

Create a `.env.local` file for local development:

```env
# Email service configuration (add when integrating email)
EMAIL_SERVICE_API_KEY=your_api_key_here
EMAIL_FROM=hello@frostbytelab.com
EMAIL_TO=hello@frostbytelab.com
```

## 🎨 Customization

### Colors and Branding

The site uses a blue-cyan gradient theme. To customize:

1. Update the gradient classes in components
2. Modify the color scheme in `tailwind.config.js`
3. Update the logo and branding elements

### Content

- Update content in each page component
- Replace placeholder project data in `/projects`
- Customize services in `/services`
- Update contact information

### Images

- Add your logo to `/public/`
- Replace placeholder project images
- Optimize images for web performance

## 📱 SEO Optimization

The site includes:

- Proper meta tags and Open Graph data
- Structured data markup
- Optimized images and performance
- Semantic HTML structure
- Mobile-first responsive design

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Component-based architecture

## 📄 License

This project is private and proprietary to FrostByte Lab.

## 🤝 Support

For questions or support, contact hello@frostbytelab.com

---

Built with ❤️ by FrostByte Lab
