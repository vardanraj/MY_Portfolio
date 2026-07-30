# Vardan Raj — Portfolio Website

A personal portfolio application built for **Vardan Raj**, bridging Network Engineering and Graphic Design.

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Routing**: React Router v7

## 📂 Project Structure

```
├── public/                 # Static assets (Resume PDF, Certificate PDFs, Favicon)
│   ├── resume.pdf
│   ├── favicon.svg
│   └── certificates/       # High-res verified PDF credentials
├── src/
│   ├── components/         # Reusable UI cards, gallery, navigation, and page wrappers
│   ├── data/               # Portfolio data (projects, skills, timeline, credentials)
│   ├── images/             # Optimized WebP graphics and poster assets
│   ├── pages/              # Route views (Home, Projects, Certificates, About, Contact)
│   └── types.ts            # Shared TypeScript interfaces
├── .env.example            # Environment variables template
└── package.json            # Project dependencies and scripts
```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up Environment Variables**:
   Copy `.env.example` to `.env` and fill in your optional Web3Forms key for contact form delivery:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY="your-access-key-from-web3forms"
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 📝 Customization Instructions

- **Resume**: Replace `/public/resume.pdf` with your actual CV PDF.
- **Projects**: Edit `projectsData` in `src/data/portfolioData.ts` to add or update projects.
- **Certificates**: Add new PDFs to `/public/certificates/` and update `certificateData` in `src/data/portfolioData.ts`.
