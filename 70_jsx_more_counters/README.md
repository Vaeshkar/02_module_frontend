# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Counter Exercise (More Counters)

This project demonstrates how to manage multiple independent counters in a React application using props and state.

## Objective

Build a React app that renders **three Counter components**, each with:
- Its own independent state.
- A button to increment the count.
- Customizable increment values (e.g. +1, +10, +20).
- Optional: a button to decrement the count.

## Features

- Functional components using React Hooks (`useState`).
- Props to customize behavior of each counter.
- Basic styling with Tailwind CSS or custom CSS.

## Files

- `App.jsx`: Main component that renders three `Counter` components.
- `Counter.jsx`: Reusable component handling display and logic for a single counter.
- `App.css`: Styles for layout and visual design.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Vite development server.

## Author

Dennis van Leeuwen – WBS Coding School – Frontend Module Exercise