module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translate3d(0,-100%,0)" },
          "100%": { opacity: 1, transform: "translateZ(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 300ms ease-in-out",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://preview.colorlib.com/theme/calvino/assets/img/hero/h1_hero1.png')",
        "bottom-pattern":
          "url('https://preview.colorlib.com/theme/calvino/assets/img/gallery/contact-bg.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
