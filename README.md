# Guimox Auth Front

Guimox Auth Front is the frontend for a centralized authentication system, designed to provide secure user registration and login for all my apps. This project is built with [Astro](https://astro.build/) and integrates with the Guimox Auth API, which is deployed on a VPS.

## Features

- User registration with email and password
- Login with email and password
- Google authentication option
- Form validation and error handling
- Responsive and accessible UI
- Integration with the Guimox Auth API

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── sections/
│   ├── styles/
│   └── utils/
├── .astro/
├── dist/
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

## Tech Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## API Integration

All authentication actions are handled via requests to the Guimox Auth API, which is hosted on a VPS. The frontend communicates with the API for user registration, login, and error handling.

##
