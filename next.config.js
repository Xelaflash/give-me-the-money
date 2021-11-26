module.exports = {
  reactStrictMode: true,
  extends: ['plugin:@next/next/recommended'],
  // snipper to fix Module not found: Can't resolve 'fs' error
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, path: false };

  //   return config;
  // },
};
