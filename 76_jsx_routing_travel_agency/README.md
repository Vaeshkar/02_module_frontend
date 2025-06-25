# Travel Agency React App Skeleton

This project sets up a modern travel agency front-end using **React**, **Vite**, **React Router**, **TailwindCSS**, and **DaisyUI**. It focuses on clean project structure, multi-page navigation, and UI layout skills.

## ✨ Objective

Build the skeleton of a multi-page travel website with:

- Modern tooling (Vite, Tailwind, DaisyUI)
- React Router for navigation
- A modular file and component structure
- Hard-coded travel destination cards and dynamic route handling

## 🚀 Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Start the development server**  
   ```bash
   npm run dev
   ```

3. **View the app**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧭 Pages & Routing

The app includes the following routes:

| Route               | Description                                |
|--------------------|--------------------------------------------|
| `/`                | Home page with a search bar                |
| `/destinations`    | List of destination cards                  |
| `/destinations/:slug` | Detailed page for a specific destination |
| `/about`           | Information about the company              |
| `/contact`         | Simple contact form (no submission logic)  |

---

## 📁 Suggested File Structure

```
src/
  components/
    homepage/
      HomeSearchBar.jsx
      HomeFeatures.jsx
      HomeSignup.jsx
      HomeStats.jsx
      index.js
    about/
      AboutFAQ.jsx
      AboutHero.jsx
      AboutMission.jsx
      AboutStats.jsx
      index.js
    shared/
      NavBar.jsx
      Footer.jsx
      index.js
    index.js
  layouts/
    MainLayout.jsx
    index.js
  pages/
    Home.jsx
    Destinations.jsx
    DestinationDetails.jsx
    About.jsx
    Contact.jsx
    index.js
  App.jsx
  main.jsx
```

> Use `index.js` files inside `components`, `pages`, and `layouts` to re-export modules for cleaner imports.

Example:
```js
// src/components/index.js
export { default as NavBar } from './shared/NavBar';
export { default as SearchBar } from './homepage/SearchBar';
```

Then import like:
```js
import { NavBar, SearchBar } from '../components';
```

---

## 🎨 UI & Styling

- **Tailwind CSS**: utility-first styling
- **DaisyUI**: pre-styled UI components for rapid prototyping
- **Pexels / Unsplash**: image sources for destination previews  
  *(Be sure to check artist license terms)*

---

## 💡 Notes

- The Search Bar on the Home page navigates to the `/destinations` page when clicked.
- Destination slugs (e.g., `/destinations/berlin`) are used for dynamic routing.
- All pages share a navigation bar and footer layout.
- Components are kept modular and organized for future scalability.

---

## 🏁 License

For educational use at WBS Coding School.

--

## changelog

- **v1.0.0**: Initial project setup with Vite, React, TailwindCSS, and DaisyUI.
- **v1.0.1**: Added routing and basic page structure.
- **v1.0.2**: Implemented layout components and shared UI elements.
- **v1.0.3**: Added hard-coded destination cards and dynamic routing.
- **v1.0.4**: Improved file structure and modular imports.
- **v1.0.5**: Improved the About and Home page with DaiysUI Blocks.
- 
