// craco.config.js
process.env.DISABLE_ESLINT_PLUGIN = "true";
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // Add ignored patterns to reduce watched directories
      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/build/**",
          "**/dist/**",
          "**/coverage/**",
          "**/public/**",
        ],
      };

      // Production bundle splitChunks optimization for sub-second FCP
      if (isProduction) {
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: "all",
            maxInitialRequests: 25,
            minSize: 20000,
            cacheGroups: {
              default: false,
              vendors: false,
              framework: {
                name: "framework",
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
                priority: 40,
                chunks: "all",
              },
              framer: {
                name: "framer-motion",
                test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
                priority: 30,
                chunks: "all",
              },
              icons: {
                name: "lucide-react",
                test: /[\\/]node_modules[\\/](lucide-react)[\\/]/,
                priority: 25,
                chunks: "all",
              },
              radix: {
                name: "radix-ui",
                test: /[\\/]node_modules[\\/](@radix-ui)[\\/]/,
                priority: 20,
                chunks: "all",
              },
              vendor: {
                name: "vendor",
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: "all",
              },
            },
          },
        };
      }

      return webpackConfig;
    },
  },
};

