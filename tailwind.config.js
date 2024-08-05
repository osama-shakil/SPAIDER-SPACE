module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./src/assets/fonts/**/*.{ttf,woff,woff2,eot,otf}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Avenir", "sans-serif"],
        epilogue: [
          'url("/src/assets/fonts/Epilogue-Regular.ttf") format("truetype")',
          'url("/src/assets/fonts/Epilogue-Italic.ttf") format("truetype") italic',
          'url("/src/assets/fonts/Epilogue-Bold.ttf") format("truetype") bold',
          'url("/src/assets/fonts/Epilogue-SemiBold.ttf") format("truetype") semibold ',
        ],
        primary: ["metropolis", "sans-serif"],
        secondary: ["roboto", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          yellow: "#fae3ac",
          dark: "#f1d07c",
          hover: "#d1aa3d",
        },
        github: {
          primary: "#0d1117",
          secondary: "#161b22",
          btnColor: "#2dba4e",
          linkcolor: "#0d74e7",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          cream: "#f8f7f5",
        },
        // primary: "#234C46",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Add the custom -webkit- prefix for safari on iOS
        webkit: "var(--radius)",
      },
      width: {
        "webkit-fill-available": "-webkit-fill-available",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        custom: "-1px 5px 13px 5px rgba(231, 227, 227, 0.68)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("autoprefixer")],
};
