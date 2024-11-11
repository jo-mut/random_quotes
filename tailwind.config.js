/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,clj,cljs,cljc}",
    "./src/components/**/*.{ts,tsx,clj,cljs,cljc}",
    "./src/app/**/*.{ts,tsx,clj,cljs,cljc}",
    "./src/**/*.{ts,tsx,clj,cljs,cljc}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/assets/images/city.jpg')",
        'test-color': "#ff4500"  // Add a fallback solid color
      }
    },
  },
  plugins: [],
}