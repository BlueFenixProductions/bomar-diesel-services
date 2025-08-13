# Bomar Diesel Services

## Project Overview
Bomar Diesel Services is a full-service marine diesel repair shop. This project is built using Vue.js and Vuetify, providing a modern and responsive landing page to showcase our services.

## Features
- Hero section with a prominent title and call-to-action.
- Grid layout displaying various marine diesel repair services.
- Contact bar with placeholder information for phone and email.
- Footer with copyright information and social media links.

## Technologies Used
- Vue.js
- Vuetify
- TypeScript
- SCSS
- Vite

## Project Structure
```
bomar-diesel-services
├── src
│   ├── main.ts               # Entry point of the application
│   ├── App.vue               # Root component
│   ├── router
│   │   └── index.ts          # Vue Router setup
│   ├── plugins
│   │   └── vuetify.ts        # Vuetify plugin initialization
│   ├── styles
│   │   ├── main.scss         # Main styles
│   │   └── settings.scss     # SCSS settings
│   ├── components
│   │   ├── HeroSection.vue   # Hero section component
│   │   ├── ServicesGrid.vue   # Services grid component
│   │   ├── ContactBar.vue     # Contact bar component
│   │   └── FooterBar.vue      # Footer component
│   ├── views
│   │   └── LandingPage.vue    # Landing page view
│   └── content
│       └── site.ts            # Placeholder content
├── public
│   └── index.html            # Main HTML file
├── package.json               # NPM configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── .eslintrc.cjs              # ESLint configuration
└── .prettierrc                # Prettier configuration
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd bomar-diesel-services
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## License
This project is licensed under the MIT License.