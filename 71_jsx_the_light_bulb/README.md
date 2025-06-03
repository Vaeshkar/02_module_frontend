# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 💡 React Light Bulb Exercise

This project is part of the JSX and State exercises from the WBS Coding School Frontend Module.

## 🧠 Objective

The goal is to practice conditional rendering, state management, and event handling in React by building an interactive light bulb component.

## 🚀 Features

- A custom light bulb UI component.
- Button toggles the bulb on and off.
- Tracks how many times the bulb was turned on.
- Bulb locks after 10 activations, showing an alert.
- Includes a reset button to restart the counter.
- Bonus: clicking on the bulb also toggles its state.

## 🔧 Tech Stack

- React (with Vite)
- CSS (custom styles)
- JSX and React State

## 📁 Folder Structure

```
src/
├── App.jsx
├── LightBulb.jsx
├── index.css
├── main.jsx
└── ...
```

## 🗃️ How to Use

1. Clone the repository.
2. Run `npm install`.
3. Start the dev server with `npm run dev`.
4. Interact with the light bulb UI!

## 🧼 Notes

This exercise reinforces:
- Controlled component structure.
- Separation of logic (state) and UI.
- Use of conditional classNames and user interaction.