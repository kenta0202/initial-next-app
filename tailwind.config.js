module.exports = {
  mode: "jit",
  content: [],
  theme: {
    /* fontfamilyUtilityの追加 */
    // ➀globals.cssに埋め込みをコピペ
    // ➁tailwindconfigにfontFamilyの追加
    // ➂styledのbodyのclassにfont-typeの追加

    fontFamily: {
      type: ["Open Sans", "sans-serif"],
    },
    extend: {
      darkMode: "class", //ダークモードを有効化する
      colors: {
        darkgrey: "#222831", //darkModeで使用したい色を拡張定義
        whitegrey: "#e6e6e6",
      },
    },
  },
  // ユーティリティに対してactiveバリアントを有効にするかどうかを制御
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    opacity: ["disabled"],
  },
  plugins: [],
  // 実際に使われているものだけBuild
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
}
