module.exports = {
  images: {
    //使用する外部ドメインを設定
    domains: ["links.papareact.com", "images.unsplash.com", "image.tmdb.org"],
  },
  optimizeFonts: true,
  // Dangerously allow production builds to successfully complete even if your project has type errors.
  // ビルド時の型チェックをスキップ
  ignoreBuildErrors: true,
  // Reactv18の新機能
  reactStrictMode: false,
  // webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     poll: 800,
  //     aggregateTimeout: 300,
  //   };
  //   return config;
  // },
};
