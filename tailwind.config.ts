import type { Config } from "tailwindcss";
import flowbite from 'flowbite-react/tailwind';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
<<<<<<< HEAD
    flowbite.content()
=======
    flowbite.content(),
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
<<<<<<< HEAD
  
=======
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
};
export default config;
