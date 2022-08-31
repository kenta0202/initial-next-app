const nextJest = require("next/jest")
/*
●next/jestの機能 Next.js 12 に搭載されたSWC(ビルドツール)の恩恵
transform の記載が不要（SWC が自動で transform してくれる）
css/scss ファイル/画像ファイルのモック化が自動で行われる
testPath から node_modules/.next フォルダがデフォルトで無視される
transform から node_modules フォルダがデフォルトで無視される
*/

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット。基本は"./"で良い。
  dir: "./",
})

// Jestのカスタム設定を設置する場所。従来のプロパティはここで定義。
const customJestConfig = {
  roots: [
    // すべてのTypeScriptファイルをプロジェクトのsrcフォルダに入れる tsconfigとおなじにする
    "<rootDir>/src",
  ],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest",
  // },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/src"] /* Pathでsrcを省く ts.confingと同じにする */,
}

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映されます
module.exports = createJestConfig(customJestConfig)

/*
preset: ts-jest
TS で書かれたコードをテストするためのトランスパイラとよばれるプリプロセッサ(これがコンパイルする)
JestでTypeScriptを動かすことができる ただの変換ツール
Babelの代わり
*/
