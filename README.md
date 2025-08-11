# Profile Website

A personal portfolio website built with **Nuxt.js 3** and Vue 3.

## Features

- 🌍 Multi-language support (English, Vietnamese, Chinese, Japanese)
- 📱 Responsive design with Bulma CSS framework
- 🎨 Modern UI with smooth transitions
- 📄 Multiple pages: Home, Resume, Portfolio, Contact
- 🔗 GitHub integration for portfolio projects

## Tech Stack

- **Frontend**: Nuxt.js 3, Vue 3, Composition API
- **Styling**: Bulma CSS Framework
- **Icons**: FontAwesome, Iconify
- **Internationalization**: Vue I18n
- **Build Tool**: Vite (via Nuxt)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd hailiang194.github.io
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
├── app.vue                 # Main app component
├── nuxt.config.ts         # Nuxt configuration
├── pages/                 # Route pages
│   ├── index.vue         # Home page
│   ├── resume.vue        # Resume page
│   ├── portfolio.vue     # Portfolio page
│   └── contact.vue       # Contact page
├── components/            # Reusable components
├── data/                  # Static data files
├── locales/               # Internationalization files
├── plugins/               # Nuxt plugins
└── assets/                # Static assets
```

## Migration Notes

This project was migrated from Vue.js 2 + Vite to Nuxt.js 3. Key changes include:

- Updated from Vue 2 to Vue 3 with Composition API
- Replaced Vue Router with Nuxt.js file-based routing
- Migrated from Vite to Nuxt.js build system
- Updated FontAwesome from v2 to v3
- Replaced Buefy components with standard HTML + Bulma CSS
- Updated i18n configuration for Nuxt.js

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## License

This project is open source and available under the [MIT License](LICENSE).
