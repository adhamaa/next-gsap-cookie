const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    // domains: ["images.unsplash.com"],
    // path: "",
    loader: "imgix",
    path: "https://noop/",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
