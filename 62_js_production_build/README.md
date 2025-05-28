


# 62 JS Production Build

This project demonstrates a JavaScript production build using Parcel as the bundler.

## Features

- Built with Parcel
- Bundles JS, CSS, and images
- Optimized for deployment
- Live demo hosted on Render

## Demo

👉 [Live Demo](https://my-parcel-app-deployment.onrender.com/)

## Getting Started

### Installation

1. Clone the repository
2. Navigate to the `62_js_production_build` directory
3. Run:

```bash
npm install
```

### Development

To start the dev server:

```bash
npm run dev
```

### Production Build

To create a production build:

```bash
npm run build
```

Then serve the contents of the `dist/` folder using:

```bash
npx serve dist
```

## Deployment

This app is deployed to [Render](https://render.com/) using the static site service.
Make sure the `dist` folder is set as the publish directory and the build command is:

```bash
npm install && npm run build
```

## License

MIT