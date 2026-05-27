# Yendou — Counter Take-home

A polished React + TypeScript counter app built for the Yendou SWE assignment.

## Features

- Global counter state using `CounterContext` and `CounterProvider`
- `useCounter()` hook with `count`, `increment()`, and `reset()` support
- Chakra UI toast notifications for every increment
- Custom toast design aligned with the provided Figma values
- Local persistence via `localStorage` so the count survives page refreshes
- Futuristic dark glassmorphism UI with motion and responsive layout

## Run the app

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, typically `http://localhost:5173`.

## Build

```bash
npm run build
```

## Notes

This repository is configured for TypeScript, Vite, Chakra UI, and Framer Motion.
The design focuses on clean architecture and a polished, accessible interface.
