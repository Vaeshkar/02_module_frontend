# Star Wars Characters – React API Fetch

A small React application that fetches character data from the [Star Wars API (SWAPI)](https://swapi.tech/api/people) using the `useEffect` hook.

## 📦 Features

- Fetches and displays the first 10 Star Wars characters from the API.
- Pagination with **Next** and **Previous** buttons.
- Disabled buttons when there are no further pages.
- Loading indicator and error handling.
- Styled using Tailwind CSS.

## 🚀 Technologies Used

- React
- Vite
- Tailwind CSS
- SWAPI (Star Wars API)

## 🧠 What I Learned

- Using `useEffect` for side effects like fetching data.
- Managing multiple pieces of state: loading, error, pagination URLs, and character data.
- Handling fetch errors gracefully.
- Conditionally rendering based on app state.

## 📸 Screenshot

![App Screenshot](./screenshot.png)

## 🔧 Setup

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`