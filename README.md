# MY Portfolio



## 🚀 Features
*   **Dynamic Theme Switching:** Light and dark mode support with page-specific gradient accents.
*   **Fluid Typography & Layouts:** Responsive design that looks great on all devices.
*   **Interactive Media Gallery:** Advanced lightbox with filtering for projects and certificates.
*   **Framer Motion Animations:** Elegant route transitions and scroll-linked progress indicators.
*   **Figma-Inspired UI:** Glassmorphism effects, neon gradients, and premium layout grids.
*   **Gemini API Integration:** Prepared for server-side AI capabilities.

## 💻 Tech Stack
*   **Frontend:** React 19, React Router 7, TypeScript, Tailwind CSS v4, Motion (Framer), Lucide Icons
*   **Build & Tools:** Vite 6, ESBuild, Express, Dotenv, Google GenAI SDK

## 🛠️ Installation & Setup
1.  **Clone the repository** and navigate into the directory.
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Setup:** Create a `.env` file based on `.env.example`:
    ```env
    GEMINI_API_KEY="your_api_key_here"
    APP_URL="http://localhost:3000"
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## 📂 Project Structure
*   `src/App.tsx`: Main application component with routing and theme logic.
*   `src/components/`: Reusable UI components (Navbar, Hero, Gallery, etc.).
*   `src/pages/`: Route components (Home, About, Projects, etc.).
*   `src/data/portfolioData.ts`: Centralized content for projects, skills, and personal info.
*   `src/images/`: Static assets and certificates.

## 📜 Available Scripts
*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the app for production.
*   `npm run preview`: Previews the production build locally.
*   `npm run lint`: Runs TypeScript type checking.
