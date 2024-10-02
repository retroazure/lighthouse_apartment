import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: '#FFFFFF',
        offWhite: '#FCF9F1',
        lightGray: '#F6F3F3',
        blue: '#6AB2DD', // Lightened blue color
        beige: '#F4EFE2',
      },
    },
  },
  plugins: [],
};

export default config;
