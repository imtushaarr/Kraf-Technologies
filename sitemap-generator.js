const Sitemap = require("react-router-sitemap").default;

new Sitemap([
  "/",
  "/products",
  "/about",
  "/contact-us",
])
  .build("https://www.kraftechnologies.com")
  .save("./public/sitemap.xml");