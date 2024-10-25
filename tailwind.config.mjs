import colors from "tailwindcss/colors";
import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = {
  100: "#ccd9e1",
  200: "#99b3c3",
  300: "#678ea6",
  400: "#346888",
  500: "#01426a",
  600: "#013b5f",
  700: "#013555",
  800: "#012e4a",
  900: "#012135",
};
const gray = {
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
    fontFamily: {
      sans: ['"Atkinson Hyperlegible"'],
      mono: ['"IBM Plex Mono"'],
    },
    
  },
  plugins: [starlightPlugin()],
};

