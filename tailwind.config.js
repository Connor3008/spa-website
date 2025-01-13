module.exports = {
  content: [
    "./src/**/*.html",
    "./dist/**/*.html",
    "./*.html", // Ensure root-level HTML files are included
  ],
  theme: {
    extend: {
      colors: {
        laserHairRemoval: {
          DEFAULT: '#1E3A8A', // Primary color
          light: '#3B82F6', // Background
        },
        hydroFacial: {
          DEFAULT: '#3B82F6',
          light: '#EAF6FF',
        },
        chemicalPeels: {
          DEFAULT: '#F97316',
          light: '#FFF6E0',
        },
        microneedling: {
          DEFAULT: '#22C55E',
          light: '#F0FFF4',
        },
        prpTherapy: {
          DEFAULT: '#A855F7',
          light: '#F9F3FF',
        },
        skinResurfacing: {
          DEFAULT: '#10B981',
          light: '#E6FFF7',
        },
      },
    },
  },
  plugins: [],
};
